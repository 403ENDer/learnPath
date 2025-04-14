import RoadmapModel from "../model/roadmapModel";
import CourseModel from "../model/courseModel";
import { Coursedata } from "../public/data";
import UserModel from "../model/userModel";
import { RoadmapGenerator } from "./algorithms/algorithm";

export class CourseController {
  static generator = new RoadmapGenerator();

  public static dataFormatter(data: any) {
    const roadmap = data.roadmapId.roadmap;
    console.log(roadmap);

    const submodules = roadmap.map((submodule: any, moduleIndex: number) => ({
      id: submodule.id,
      title: submodule.topic,
      topics: submodule.subtopics.map((topic: any, topicIndex: number) => ({
        id: `topic-${moduleIndex + 1}-${topicIndex + 1}`,
        topic: topic.subtopic,
        url: topic.url,
      })),
    }));

    return {
      id: data.id,
      title: roadmap.title,
      submodules,
    };
  }

  public static async getUserCourses(req: any, res: any) {
    try {
      const id = req.user.id;
      const user = await UserModel.findById(id).populate("coursesIds");

      if (!user || !user.coursesIds.length) {
        return res.send({ message: "No data found" });
      }
      const courseDetails = await Promise.all(
        user.coursesIds.map(async (item: any) => {
          const course = await CourseModel.findById(item._id).populate(
            "roadmapId"
          );
          return {
            ...item.toObject(),
            length: course?.roadmapId?.roadmap?.submodules?.length || 0,
          };
        })
      );

      return res.send({ data: courseDetails });
    } catch (err: any) {
      console.log(err);
      return res.status(500).send({ error: err.message });
    }
  }

  public static async getCourse(req: any, res: any) {
    try {
      const id = req.query.id;
      const course = await CourseModel.findById(id).populate("roadmapId");
      if (!course) {
        return res.send({ message: "No data found" });
      }
      const coursedata = CourseController.dataFormatter(course);
      return res.send({ data: coursedata });
    } catch (err: any) {
      console.log(err);
      return res.status(400).send({ error: err.message });
    }
  }

  public static async getRecommendation(req: any, res: any) {
    try {
      const course = await CourseModel.findById(req.query.id).populate(
        "roadmapId"
      );
    } catch (err: any) {
      return res.status(400).send({ error: err.message });
    }
  }

  public static async createCourse(req: any, res: any) {
    try {
      const levelMap: Record<string, number> = {
        beginner: 1,
        intermediate: 2,
        advanced: 3,
      };
      const { domain, level } = req.body;
      const data = Coursedata.find((item) => item.id === domain);

      //roadmap generation logic comed here
      const bestRoadMap = CourseController.generator.generateRoadmap(
        domain,
        levelMap[String(level).toLowerCase()]
      );
      const roadmap = await RoadmapModel.create({ roadmap: bestRoadMap.path });
      const course = await CourseModel.create({
        domain: domain,
        level: level,
        roadmapId: roadmap.id,
      });

      await UserModel.findByIdAndUpdate(req.user.id, {
        $push: { coursesIds: course._id },
      });

      const courseWithRoadmap = await CourseModel.findById(course._id).populate(
        "roadmapId"
      );

      if (!courseWithRoadmap) {
        return res.status(500).send({ message: "Course creation failed" });
      }
      const coursedata = CourseController.dataFormatter(courseWithRoadmap);
      return res.send({ data: coursedata });
    } catch (err: any) {
      console.log(err);
      return res.status(400).send({ error: err.message });
    }
  }

  public static async reFrameRoadmap(req: any, res: any) {
    const levelMap: Record<string, number> = {
      beginner: 1,
      intermediate: 2,
      advanced: 3,
    };
    const data = req.body;
    const { courseId, completedTopics, balanceTopics } = data;
    const course = await CourseModel.findById(courseId);
    const domain = course.domain;
    const level = course.level;
    const roadmap = CourseController.generator.reframeRoadmap(
      domain,
      completedTopics,
      balanceTopics,
      levelMap[String(level).toLowerCase()]
    );

    await RoadmapModel.findByIdAndUpdate(course.roadmapId, {
      roadmap: roadmap.path,
    });

    const courseWithRoadmap = await CourseModel.findById(course._id).populate(
      "roadmapId"
    );

    if (!courseWithRoadmap) {
      return res.status(500).send({ message: "Course creation failed" });
    }
    const coursedata = CourseController.dataFormatter(courseWithRoadmap);
    return res.send({ data: coursedata });
  }

  public static async updateCourse(req: any, res: any) {
    const data = req.body();
    const roadmap = await RoadmapModel.findByIdAndUpdate(data.id, data);
    return res.send({ data: roadmap });
  }
}

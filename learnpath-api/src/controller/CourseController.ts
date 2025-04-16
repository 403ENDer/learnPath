import RoadmapModel from "../model/roadmapModel";
import CourseModel from "../model/courseModel";
import { Coursedata } from "../public/data";
import UserModel from "../model/userModel";
import { RoadmapGenerator } from "./algorithms/algorithm";

export class CourseController {
  static generator = new RoadmapGenerator();

  public static dataFormatter(data: any) {
    const roadmap = data.roadmapId.roadmap;
    const submodules = roadmap.map((submodule: any, moduleIndex: number) => ({
      id: submodule.id,
      title: submodule.topic,
      isModuleCompleted: submodule.isModuleCompleted,
      topics: submodule.subtopics.map((topic: any, topicIndex: number) => ({
        id: topic.id,
        topic: topic.subtopic,
        url: topic.url,
        isTopicCompleted: topic.isTopicCompleted,
      })),
    }));

    return {
      id: data.id,
      title: roadmap.title,
      submodules,
    };
  }

  public static async addCompleteState(roadmap: any) {
    roadmap.forEach((submodule: any) => {
      submodule.isModuleCompleted = false;
      submodule.subtopics.forEach((topic: any) => {
        topic.isTopicCompleted = false;
      });
    });

    return roadmap;
  }

  public static async topicsSplit(roadmap: any) {
    const completedTopics: any[] = [];
    const balanceTopics: any[] = [];
    roadmap.forEach((submodule: any) => {
      submodule.subtopics.some((topic: any) => topic.isModuleCompleted == true)
        ? completedTopics.push(submodule)
        : balanceTopics.push(submodule);
    });

    return { completedTopics, balanceTopics };
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
            length: course?.roadmapId?.roadmap.length || 0,
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
      const finalRoadmap = await CourseController.addCompleteState(
        bestRoadMap.path
      );
      const roadmap = await RoadmapModel.create({ roadmap: finalRoadmap });
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
    const { courseId } = data;
    const course = await CourseModel.findById(courseId).populate("roadmapId");
    const { completedTopics, balanceTopics } =
      await CourseController.topicsSplit(course.roadmapId.roadmap);
    const domain = course.domain;
    const level = course.level;
    console.log(
      domain,
      completedTopics,
      balanceTopics,
      levelMap[String(level).toLowerCase()]
    );
    const roadmap = CourseController.generator.reframeRoadmap(
      domain,
      completedTopics,
      balanceTopics,
      levelMap[String(level).toLowerCase()]
    );
    console.log(roadmap);
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

  public static async updateStatus(req: any, res: any) {
    try {
      const data = req.body;
      const { topicId, courseId } = data;
      console.log(data);
      const course = await CourseModel.findById(courseId);
      const roadmap = await RoadmapModel.findById(course.roadmapId);
      roadmap.roadmap.forEach((module: any) => {
        module.subtopics.map((topic: any) => {
          if (topic.id === topicId) {
            topic.isTopicCompleted = true;
          }
        });

        module.subtopics.some((topic: any) => topic.isTopicCompleted === false)
          ? (module.isModuleCompleted = false)
          : (module.isModuleCompleted = true);
      });
      roadmap.markModified("roadmap");
      await roadmap.save();
      return res
        .status(200)
        .send({ sucess: true, message: "Topic status updated" });
    } catch (err) {
      console.log(err);
      return res.send({ sucess: false, message: "Opeation failed" });
    }
  }
}

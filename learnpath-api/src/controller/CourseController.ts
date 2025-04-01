import RoadmapModel from "../model/roadmapModel";
import CourseModel from "../model/courseModel";
import { Coursedata } from "../public/data";
import UserModel from "../model/userModel";

export class CourseController {
  public static dataFormatter(data: any) {
    const roadmap = data.roadmapId.roadmap;
    const submodules = roadmap.submodules.map(
      (submodule: any, moduleIndex: any) => ({
        id: submodule.id,
        title: submodule.title,
        topics: submodule.topics.map((topic: any, topicIndex: any) => ({
          id: `topic-${moduleIndex + 1}-${topicIndex + 1}`,
          topic: topic.topic,
          url: topic.subtopics.map((subtopic: any) => subtopic.url),
        })),
      })
    );

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

  public static async createCourse(req: any, res: any) {
    try {
      const { domain, level } = req.body;
      const data = Coursedata.find((item) => item.id === domain);

      //roadmap generation logic comed here

      const roadmap = await RoadmapModel.create({ roadmap: data });
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

  public static async updateCourse(req: any, res: any) {
    const data = req.body();
    const roadmap = await RoadmapModel.findByIdAndUpdate(data.id, data);
    return res.send({ data: roadmap });
  }
}

import RoadmapModel from "../model/roadmapModel";
import CourseModel from "../model/courseModel";
import { Coursedata } from "../public/data";

export class CourseController {
  public static async getCourse(req: any, res: any) {
    try {
      const id = req.query.id;
      const course = await CourseModel.findById(id).populate("roadmapId");
      if (!course) {
        return res.send({ message: "No data found" });
      }
      return res.send({ data: course });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: err });
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
      const courseWithRoadmap = await CourseModel.findById(course._id).populate(
        "roadmapId"
      );
      return res.send({ data: courseWithRoadmap });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: err });
    }
  }

  public static async updateCourse(req: any, res: any) {
    const data = req.body();
    const roadmap = await RoadmapModel.findByIdAndUpdate(data.id, data);
    return res.send({ data: roadmap });
  }
}

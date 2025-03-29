import { Router } from "express";
import { CourseController } from "../controller/CourseController";

const roadmapRouter = Router();

roadmapRouter.get("/", CourseController.getCourse);
roadmapRouter.post("/", CourseController.createCourse);
roadmapRouter.put("/", CourseController.updateCourse);

export default roadmapRouter;

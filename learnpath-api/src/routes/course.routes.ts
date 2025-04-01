import { Router } from "express";
import { CourseController } from "../controller/CourseController";
import { verifyJWTtoken } from "../middleware/auth.middleware";
const courseRoute = Router();

courseRoute.get("/", CourseController.getCourse);
courseRoute.get("/list", verifyJWTtoken, CourseController.getUserCourses);
courseRoute.post("/", verifyJWTtoken, CourseController.createCourse);
courseRoute.put("/", CourseController.updateCourse);

export default courseRoute;

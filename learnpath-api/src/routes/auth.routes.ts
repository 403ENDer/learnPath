import { Router } from "express";
import passport from "../../config/passport";
import { verifyJWTtoken } from "../middleware/auth.middleware";
import { handleGoogleCallback } from "../controller/authController";
const authRoute = Router();

authRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRoute.get(
  "/googleCallback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  handleGoogleCallback
);
export default authRoute;

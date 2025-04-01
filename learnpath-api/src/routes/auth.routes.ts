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

authRoute.get("/verifyJWT", verifyJWTtoken, (req: any, res: any) => {
  try {
    res.status(200).send({ sucess: true });
  } catch (err) {
    console.log(err);
  }
});
export default authRoute;

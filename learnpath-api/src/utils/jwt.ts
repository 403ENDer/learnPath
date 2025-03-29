import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createToken = (payload: any) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (err) {
    console.log(err);
    return err;
  }
};

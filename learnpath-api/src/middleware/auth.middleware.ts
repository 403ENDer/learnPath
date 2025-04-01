import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../model/userModel";

interface decode {
  id: string;
  userId: number;
  email: string;
  name: string;
}
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }
  try {
    verifyToken(token);
    next();
  } catch (err) {
    return res.redirect("/login");
  }
};

export const verifyJWTtoken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(400).send({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    const userIds = await UserModel.find().select("userId").lean();
    const sortedIds = userIds.map((user: any) => user.userId).sort();
    const isUserValid = binarySearch(sortedIds, decoded.userId);

    if (!isUserValid) {
      return res.status(404).send({ message: "User not found" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).send({ message: "Token Expired" });
  }
};

const binarySearch = (arr: string[], target: string): boolean => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

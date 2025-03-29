import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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

export const verifyJWTtoken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(400).send("No token provided");
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).redirect("/login");
  }
};

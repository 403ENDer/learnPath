import express from "express";
import dotenv from "dotenv";
import passport from "../config/passport";
import mongoose from "../config/db";
import authRoute from "./routes/auth.routes";
import courseRoute from "./routes/course.routes";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(
  session({
    secret: process.env.JWT_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/course", courseRoute);
app.listen(port, () => {
  mongoose.connect;
  console.log(`Server running on ${host}:${port}`);
});

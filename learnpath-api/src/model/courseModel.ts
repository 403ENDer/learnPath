import mongoose, { Schema, Document, Types } from "mongoose";

interface Course extends Document {
  domain: string;
  level: string;
  roadmapId: Types.ObjectId;
}

const CourseSchema = new mongoose.Schema<Course>({
  domain: { type: String, required: true },
  level: { type: String, required: true },
  roadmapId: { type: Schema.Types.ObjectId, ref: "roadmaps", required: true },
});

const CourseModel =
  mongoose.models.Course || mongoose.model<Course>("Course", CourseSchema);

export default CourseModel;

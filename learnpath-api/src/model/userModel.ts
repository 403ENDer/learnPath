import mongoose, { Schema, model } from "mongoose";
import CounterModel from "./counterModel";

interface User extends Document {
  userId: number;
  name: string;
  email: string;
  coursesIds: [];
}

// Define User Schema
const UserSchema = new mongoose.Schema<User>(
  {
    userId: { type: Number, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    coursesIds: [{ type: Schema.ObjectId, ref: "courses" }],
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isNew) return next();

  const counter = await CounterModel.findByIdAndUpdate(
    { _id: "userId" },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );

  this.userId = counter?.seq || 1;
  next();
});

const UserModel = mongoose.models.User || model<User>("users", UserSchema);

export default UserModel;

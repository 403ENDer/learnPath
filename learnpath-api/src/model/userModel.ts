import mongoose from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  courses:[]
}

const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses:[{type:Object}]
});

const UserModel =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);

export default UserModel;

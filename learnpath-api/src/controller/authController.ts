import UserModel from "../model/userModel";
import dotenv from "dotenv";
import { createToken } from "../utils/jwt";

dotenv.config();
export const handleGoogleCallback = async (req: any, res: any) => {
  const user = req.user;
  const player = await UserModel.findOne({ email: user.emails[0].value });

  if (!player) {
    const player = new UserModel({
      name: user.name.givenName,
      email: user.emails[0].value,
    });
    await player.save();
  }

  const token = createToken({
    id: player.id.toString(),
    nane: player.name,
    emai: player.email,
  });

  res.cookie("token", token, { httponly: true });
  return res.redirect(`http://localhost:3000/auth/success?token=${token}`);
};

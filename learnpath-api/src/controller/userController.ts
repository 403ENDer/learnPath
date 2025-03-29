import UserModel from "../model/userModel";

export class userController {
  public static async getUserData(req: any, res: any) {
    const id = req.user.id;
    const data = await UserModel.findById(id);
  }
}

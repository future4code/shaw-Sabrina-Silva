import { Router } from "express";
import FriendController from "../controller/FriendController";
import UserController from "../controller/UserController";

export const userRouter = Router()

const userController = new UserController()
const friendController = new FriendController()

userRouter.post("/singup", userController.singup)
userRouter.post("/login", userController.login)

userRouter.post("/invite-friend/:your_id", friendController.postInviteFriend)
userRouter.delete("/delete-friend/:your_id/:friend_id", friendController.deleteFriendship)
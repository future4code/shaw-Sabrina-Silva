import { Router } from "express";
import  UserController from "../controller/UserController";
import  UserBussines  from "../bussines/UserBussines";

export const userRouter = Router()

const userBussines = new UserBussines()
const userController = new UserController(userBussines)

userRouter.post("/create",userController.postUser)
userRouter.get("/get-users",userController.getUsers)
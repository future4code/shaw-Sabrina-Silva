import { Router } from "express";
import PostController from "../controller/PostController";

export const postRouter = Router()

const postController = new PostController()

postRouter.post("/create", postController.createPost)
postRouter.get("/:id", postController.getPostById)
postRouter.get("/all-posts/:page", postController.getPostsByPage)
postRouter.get("/all-posts-sorted", postController.getPostsByTypeAndOrder)

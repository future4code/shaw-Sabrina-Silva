import { app } from "./controller/app"
import FriendController from "./controller/FriendController"
import PostController from "./controller/PostController"
import UserController from "./controller/UserController"

const userController = new UserController()
const postController = new PostController()
const friendController = new FriendController()

app.post("/user/singup", userController.singup)
app.post("/user/login", userController.login)

app.post("/post/create", postController.createPost)
app.get("/post/:id", postController.getPostById)
app.get("/all-posts/:page", postController.getPostsByPage)
app.get("/all-posts-sorted", postController.getPostsByTypeAndOrder)

app.post("/user/invite-friend/:your_id", friendController.postInviteFriend)
app.delete("/user/delete-friend/:your_id/:friend_id", friendController.deleteFriendship)
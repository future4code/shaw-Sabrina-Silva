import PostBusiness from "./business/PostBusiness"
import UserBusiness from "./business/UserBusiness"
import { app } from "./controller/app"
import FriendController from "./controller/FriendController"
import PostController from "./controller/PostController"
import UserController from "./controller/UserController"
import { PostData } from "./data/PostData"
import UserData from "./data/UserData"
import { Authenticator } from "./services/Authenticator"
import { IdGenerator } from "./services/Generator"
import { HashManager } from "./services/HashManager"

// const userBusiness = new UserBusiness(
//     new UserData(),
//     new HashManager(),
//     new Authenticator()
// )
const userController = new UserController()

const postBusiness = new PostBusiness(new PostData())
const postController = new PostController(
    postBusiness
)

const friendController = new FriendController()

app.post("/user/singup", userController.singup)
app.post("/user/login", userController.login)

app.post("/post/create", postController.createPost)
app.get("/post/:id", postController.getPostById)
app.get("/all-posts/:page", postController.getPostsByPage)
app.get("/all-posts-sorted", postController.getPostsByTypeAndOrder)

app.post("/user/invite-friend/:your_id", friendController.postInviteFriend)
app.delete("/user/delete-friend/:your_id/:friend_id", friendController.deleteFriendship)
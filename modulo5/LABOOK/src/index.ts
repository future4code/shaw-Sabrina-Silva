import PostBusiness from "./business/PostBusiness"
import UserBusiness from "./business/UserBusiness"
import { app } from "./controller/app"
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

app.post("/user/singup", userController.singup)
app.post("/user/login", userController.login)

app.post("/post/create", postController.createPost)
app.get("/post/:id", postController.getPostById)
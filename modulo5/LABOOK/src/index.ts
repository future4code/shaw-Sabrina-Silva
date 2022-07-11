import { app } from "./controller/app"
import { userRouter } from "./router/userRouter"
import { postRouter } from "./router/postRouter"

app.use('/user', userRouter)
app.use('/post', postRouter )


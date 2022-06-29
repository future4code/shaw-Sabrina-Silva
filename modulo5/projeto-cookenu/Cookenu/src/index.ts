import app from "./app"
import editUser from './endpoints/editUser'
import createRecipe from './endpoints/createRecipe'
import { singup } from "./endpoints/singup"
import { login } from "./endpoints/login"
import getUser from "./endpoints/getUser"
import getUserById from "./endpoints/getUserById"

app.post('/user/signup', singup)
app.post('/user/login', login)
app.put('/user/edit/:id', editUser)
app.get('/user/profile', getUser)
app.post('/recipe/create', createRecipe)
app.get('/user/profile/:id', getUserById)
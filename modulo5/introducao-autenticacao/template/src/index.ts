import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { singup } from "./endpoints/singup"
import { login } from "./endpoints/login"
import getUser from "./endpoints/getUser"

app.post('/user/signup', singup)
app.post('/user/login', login)
app.put('/user/edit/:id', editUser)
app.get('/user/profile', getUser)
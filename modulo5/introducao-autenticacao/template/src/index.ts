import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { singup } from "./endpoints/singup"

app.post('/user/signup', singup)
app.put('/user/edit/:id', editUser)
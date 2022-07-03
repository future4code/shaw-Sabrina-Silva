import app from "./app"
import editUser from './endpoints/editUser'
import createRecipe from './endpoints/createRecipe'
import { singup } from "./endpoints/singup"
import { login } from "./endpoints/login"
import getUser from "./endpoints/getUser"
import getUserById from "./endpoints/getUserById"
import { getRecipes } from "./endpoints/getRecipes"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import editRecipe from "./endpoints/editRecipe"

app.get('/user/profile', getUser)

app.get('/user/profile/:id', getUserById)

app.get('/recipe/:id', getRecipes)

app.get('/user/feed', getAllRecipes)

app.post('/user/signup', singup)

app.post('/user/login', login)

app.post('/recipe/create', createRecipe)

app.put('/user/edit/:id', editUser)

app.put('/recipe/edit/:id', editRecipe)



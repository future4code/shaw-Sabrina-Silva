import { Request, Response } from "express";
import moment from "moment";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/authenticator";
import { RecipeEdit } from "../types";

export default async function editRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { title, description } = req.body
        const id = req.params.id

        //const createDateEdit = moment().format("YYYY-MM-DD")

        const token: string = req.headers.authorization as string

        if (!token) {
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }

        if (!title && !description) {
            res.statusCode = 422
            res.statusMessage = "Informe o(s) novo(s) 'título' ou 'descrição'"
            throw new Error()
        }

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        // const user_id = dataID.id

        if (authenticationData.role !== "NORMAL") {
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }

        const newRecipe:any= new RecipesDataBase()
        const recipe:RecipeEdit = newRecipe.edit(id, title, description)

        console.log(recipe);

        res.status(200).send(recipe);

    } catch (error: any) {
        res.send({ message: error.message })
    }
}
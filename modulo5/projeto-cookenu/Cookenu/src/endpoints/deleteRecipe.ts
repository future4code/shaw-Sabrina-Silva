import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/authenticator";

export default async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id

        const token: string = req.headers.authorization as string

        if (!token) {
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }

        const deleteRecipe:any= new RecipesDataBase()
        const recipe = deleteRecipe.delete(id)

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const user_id = authenticationData.id

        // if(user_id !== recipe.user_id){
        //     res.statusCode = 409
        //     throw new Error('Usuario não autorizado.')
        // }

        res.status(200).send("OK");

    } catch (error: any) {
        res.send({ message: error.message })
    }
}
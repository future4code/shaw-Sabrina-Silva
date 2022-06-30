import { Response, Request } from "express";
import moment from "moment";
import { RecipesDataBase } from "../data/RecipesDataBase";

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const token: string = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error('Não autorizado.')
        }

        const recipeDB = new RecipesDataBase()

        const recipe = await recipeDB.selectRecipeById(id)

        if (!recipe) {
            res.statusCode = 404
            throw new Error('Id não encontrado.')
        }

        const newDate = moment(`${recipe.createDate}`).format("DD-MM-YYYY")

        res.status(200).send({
            recipe: {
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                user_id: recipe.user_id,
                createDate: newDate
            }
        })

    } catch (error: any) {
        res.send({ message: error.message })
    }
}
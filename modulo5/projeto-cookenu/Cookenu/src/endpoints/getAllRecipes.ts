import { Request, Response } from "express";
import moment from "moment";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { UserAndRecipe } from "../types";

export const getAllRecipes = async (req: Request, res: Response) => {
    try{
        const token:string = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error('Não autorizado.')
        }

        const newRecipe = new RecipesDataBase()

        const recipeDB = await newRecipe.selectRecipe()

        if(!recipeDB){
            res.statusCode = 404
            throw new Error("Receita não encontrada")
        }


        const newUserRecipes = recipeDB.map((user:UserAndRecipe)=>{
            const newDate = moment(`${user.createDate}`).format("DD-MM-YYYY")
            return {
                id: user.id,
                title: user.title,
                description: user.description,
                createDate: newDate,
                user_id: user.user_id,
                name: user.name
            }
        })
        
        res.status(200).send(newUserRecipes);

    }catch (error:any){
        res.send({message: error.message})
    }
}
import { Request, Response } from "express";
import moment from "moment";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/authenticator";
import { Generate } from "../services/generate";
import { Recipe } from "../types";

export default async function createRecipe(req: Request, res: Response): Promise<void> {
   try {
      const { title, description } = req.body

      if (title.length === 0 || description.length === 0) {
         res.statusCode = 406
         throw new Error("Campo vazio")
      }
      
      if (title !== String(title) || description !== String(description)) {
         res.statusCode = 406
         throw new Error("Valor invalido")
      }

      const token: string = req.headers.authorization as string

      if (!token) {
         res.statusCode = 401
         throw new Error('Não autorizado.')
      }

      const createDate = moment().format("YYYY-MM-DD")

      const generate = new Generate()
      const id: string = generate.generateId()

      const userAuth = new Authenticator()
      const dataID = userAuth.getData(token)

      const user_id = dataID.id

      const newRecipe: Recipe = { id, title, description, createDate, user_id }

      const recipeDB = new RecipesDataBase()
      await recipeDB.create(newRecipe)

      res.status(201).send(newRecipe)

   } catch (error: any) {
      res.send({ message: error.sqlMessage || error.message })

   }
}
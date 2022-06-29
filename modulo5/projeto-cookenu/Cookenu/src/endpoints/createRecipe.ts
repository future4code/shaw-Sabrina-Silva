import { Request, Response } from "express";
import moment from "moment";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/authenticator";
import { Generate } from "../services/generate";
import { Recipe} from "../types";

export default async function createRecipe(req: Request, res: Response): Promise<void> {
   try {
      const { title, description} = req.body
      
      const token: string = req.headers.authorization as string
      
      const createDate = moment().format("YYYY-MM-DD")
     
      const generate = new Generate()
      const id: string = generate.generateId()

      const userAuth = new Authenticator()
      const dataID = userAuth.getData(token)

      const user_id = dataID.id

      if (!token) {
         res.statusCode = 409
         throw new Error('Não autorizado.')
      }

      if (!title || !description) {
         res.statusCode = 422
         throw new Error("Campo vazio")
      }

      const newRecipe: Recipe = { id, title, description, createDate, user_id}

      const recipeDB = new RecipesDataBase()
       await recipeDB.create(newRecipe)
      
      res.status(201).send(newRecipe)

   } catch (error: any) {
      console.log(error)
      if (res.statusCode !== 200) {
         res.status(500).send({ message: "Internal server error" })  
      } else {
         res.send({ message: error.sqlMessage ||  error.message })
      }
   }
}
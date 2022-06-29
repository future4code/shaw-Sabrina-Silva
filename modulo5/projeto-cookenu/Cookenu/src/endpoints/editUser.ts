import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";

export default async function createUser(req: Request,res: Response): Promise<void> {
   try {
      const { name, nickname } = req.body

      const token:string = req.headers.authorization as string

        if (!token) {
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }
        
      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        if(authenticationData.role !== "NORMAL"){
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }

      new UserDatabase().edit(req.params.id, {name, nickname})

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}
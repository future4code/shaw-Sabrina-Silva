import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";

export default async function getUserById( req: Request, res: Response): Promise<void> {
    try{
        const token:string = req.headers.authorization as string

        const id = req.params.id

        if (!token) {
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }
        
        const userDB = new UserDatabase()

        const user = await userDB.getUserById(id);
        
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
          });

    }catch (error:any){
        res.send({ message: error.message })
    }
}
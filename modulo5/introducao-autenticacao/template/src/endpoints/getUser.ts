import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";

export default async function getUser( req: Request, res: Response): Promise<void> {
    try{
        const token:string = req.headers.authorization as string

        if (!token) {
            res.statusCode = 409
            throw new Error('Não autorizado.')
        }

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDB = new UserDatabase()

        const user = await userDB.getUserById(authenticationData.id);
        
        res.status(200).send({
            id: user.id,
            email: user.email,
          });

    }catch (error:any){
        res.send({ message: error.message })
    }
}
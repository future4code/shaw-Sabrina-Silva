import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { Generate } from "../services/generate";
import { user } from "../types";

export const singup = async (req:Request, res:Response) => {
try{
    const { email, password } = req.body

    const userDB = new UserDatabase()
    const user = await userDB.getByEmail(email)

    const generate = new Generate()
    const id: string = generate.generateId()

    const newUser: user = { id, email, password }

    await userDB.create(newUser)

    const authenticator = new Authenticator()
    const token = authenticator.generateToken({id})
    
    console.log(newUser, token)

    res.status(201).send({ newUser, token })
    
}catch (error:any){
    res.send({ message: error.message })
}
}
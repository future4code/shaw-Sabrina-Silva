import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { Generate } from "../services/generate";
import { user } from "../types";

export const singup = async (req:Request, res:Response) => {
try{
    const { email, password } = req.body

    if (!email || !password) {
        res.statusCode = 422
        throw new Error("Preencha os campos.")
     }

     if (email.indexOf("@") === -1) {
        res.statusCode = 422
        throw new Error("Email invalido.")
     }

     if (password.length < 6) {
        throw new Error("Sua senha deve conter mais de 6 digitos");
      }

    const userDB = new UserDatabase()
    const user = await userDB.getByEmail(email)

    if (user) {
        res.statusCode = 409
        throw new Error('Email já cadastrado')
     }

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
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { Generate } from "../services/generate";
import { HashManager } from "../services/hashManager";
import { user } from "../types";

export const singup = async (req:Request, res:Response) => {
try{
    const {name, email, password, role } = req.body

    if (!email || !password || !name) {
        res.statusCode = 422
        throw new Error("Preencha os campos.")
     }

     if (email !== String(email) || name !== String(name)) {
        res.statusCode = 422
        throw new Error("Valores invalidos.")
     }

     if (email.indexOf("@") === -1) {
        res.statusCode = 422
        throw new Error("Email invalido.")
     }

     if (password.length < 6) {
        throw new Error("Sua senha deve conter mais de 6 digitos");
      }

    const generate = new Generate()
    const id: string = generate.generateId()
      
    const userDB = new UserDatabase()
    const user = await userDB.getByEmail(email)

    if (user) {
        res.statusCode = 409
        throw new Error('Email já cadastrado')
     }

    const hashManeger = new HashManager()
    const hash = await hashManeger.hash(password)

    const newUser: user = { id, name, email, password:hash, role }

    await userDB.create(newUser)

    const authenticator = new Authenticator()
    const token = authenticator.generateToken({id, role})

    res.status(201).send({newUser: {id, name, email}, token})
    
}catch (error:any){
    res.send({ message: error.message })
}
}
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password} = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos.")
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email invalido.")
        }

        const userDB = new UserDatabase()

        const user = await userDB.getByEmail(email)

        if (!user) {
            res.statusCode = 409
            throw new Error('Email ou senha incorretos.')
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({token});

    } catch (error: any) {
        res.send({ message: error.message })
    }
}
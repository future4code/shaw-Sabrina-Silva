import { Request, Response } from "express";
import UserBussines from "../Bussines/UserBussines";
import {userInput, userLogin } from "../types/user";

class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body

            const newUser: userInput = {
                name,
                nickname,
                email,
                password,
                role
            }

            // instanciar a classe bussines
            const userBussines = new UserBussines()

            // chamar o metodo de signUp , que esta no bussines e ele retorna um token
            const token = await userBussines.signUp(newUser)

            res.status(201).send({ message: "usuario criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try{
            const { email, password } = req.body

            const newUser: userLogin = {
                email,
                password
            }

            const userBussines = new UserBussines()

            const token = await userBussines.login(newUser)

            res.status(201).send({ message: "usuario logado com sucesso", token })

        }catch(error:any){
            res.status(500).send({ message: error.message })
        }
    }

    async getUser(req:Request, res:Response){
        try{
            const token: string = req.headers.authorization as string

            const userBussines = new UserBussines()

            const users = await userBussines.getUsers(token)

            res.status(201).send(users)

        }catch(error:any){
            res.status(500).send({ message: error.message })
        }
    }

    async deleteUser(req:Request, res:Response){
        const id = req.params.id
        const token: string = req.headers.authorization as string
    
        const userBussines = new UserBussines()

        await userBussines.deleteUsers(id, token)

        res.status(201).send({message: "Usuário deletado"})
    }
}

export default UserController
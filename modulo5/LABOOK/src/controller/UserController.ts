import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import UserData from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { LoginInputDTO } from "../types/LoginInputDTO";
import { SingupInputDTO } from "../types/singupInputDTO";

export default class UserController {

// constructor(
//     private userBusiness:UserBusiness
// ){}

    async singup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const input: SingupInputDTO = {
                name, email, password
            }

            const user = new UserBusiness(
            new UserData(),
            new HashManager(),
            new Authenticator()
            )

            const token = await user.singup(input)

            res.status(201).send({ message: "Usuário cadastrado com sucesso", token})

        } catch (error) {  
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro Singup!")
        }

    }

    async login(req: Request, res: Response){
        try{

            const { email, password } = req.body

            const newUser: LoginInputDTO = {
                email,
                password
            }

            const user = new UserBusiness(
                new UserData(),
                new HashManager(),
                new Authenticator()
                )

            const token = await user.login(newUser)

            res.status(201).send({ message: "usuario logado com sucesso", token })

        }catch (error:any){
            res.status(500).send({ message: error.message || error.sqlMessage })
        }
    }
}
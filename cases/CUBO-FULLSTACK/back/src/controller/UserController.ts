import { Request, Response } from "express";
import UserBussines from "../bussines/UserBussines";


class UserController {
    constructor(
        private userBussines = new UserBussines
    ){}

    postUser = async (req: Request, res: Response)=>{
        try{
            const { first_name, second_name, participation } = req.body

            const token = await this.userBussines.insertUser({
                first_name, 
                second_name, 
                participation
            })

            res.status(201).send({message:"User Createad",token})

        }catch (error:any){
            res.send({ message: error.sqlMessage || error.message })
        }
    }

    getUsers = async (req: Request, res: Response)=>{
        try{

            const token: string = req.headers.authorization as string

            const result = await this.userBussines.selectAllUser(token)

            res.status(201).send({ result })

        }catch (error: any){
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}

export default UserController
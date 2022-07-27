import UserData from "../data/UserData";
import { CustomError } from "../error/CustomError";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/Generator";
import { InputUserDTO } from "../types/InputUserDTO";

class UserBussines{
    constructor(
        private userData = new UserData,
        private idGenerate = new IdGenerator,
        private authenticator = new Authenticator
    ){}

    insertUser = async(user: InputUserDTO) => {
        const {first_name, second_name, participation} = user

        const participationAsNumber = Number(participation)

        if(!first_name || !second_name || !participation ){
            throw new CustomError(406,'Fill in the fields, please')
        }

        if(first_name !== String(first_name) || second_name !== String(second_name) || participation !== Number(participation) ){
            throw new CustomError(406,"Invalid fields")
        }

        const id = this.idGenerate.generateId()

        const newUser = new User(
            id,
            first_name,
            second_name,
            participationAsNumber
        )

        await this.userData.insert(newUser)

        const token = this.authenticator.generateToken({id})

        return token
    }

    selectAllUser = async(token:string) => {

        if(!token ){
            throw new CustomError(401,'Not authorized')
        }

        const userList = await this.userData.selectUsers()

        if (!userList) {
            throw new CustomError(404,'Users not found!')
        }

        return userList
    }
}

export default UserBussines
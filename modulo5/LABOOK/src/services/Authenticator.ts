import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/authData"
import dotenv from 'dotenv'

dotenv.config()

export class Authenticator {
    generateToken = (
        payload: authenticationData
    ): string => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
        )
    }

    getTokenData = (
        token: string
    ): authenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as authenticationData
        const result = {
            id: data.id,
           // role: data.role
        }
        return result
    }

}

import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/AuthenticatorData";

export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
           
        )
        return token;
    }

    public getData = (token: string): AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        const result = {
          id: data.id
        };
        return result;
    }
}


import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        try{
            await BaseDatabase.connection('User')
            .insert(newUser)
            
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }

    }
    public edit = async (id: string, columnsUpdate: { name: string, nickname: string }) => {
        await BaseDatabase.connection('User')
            .update(columnsUpdate)
            .where({ id })
    }
    public getByEmail = async (email: string) => {
        const [result] = await BaseDatabase.connection('User')
            .where({ email })
        return result
    }
}
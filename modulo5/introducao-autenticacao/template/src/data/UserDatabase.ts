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

    public getUserById = async (id: string) => {
        const [result] = await BaseDatabase.connection('User')
            .select("*")
            .where({ id })

            return result
    }
    
    public getByEmail = async (email: string) => {
        const [result] = await BaseDatabase.connection('User')
            .select("*")
            .where({ email })
        return result
    }
}
import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        try{
            await BaseDatabase.connection('user_cookenu')
            .insert(newUser)
            
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }

    }
    public edit = async (id: string, columnsUpdate: { name: string, nickname: string }) => {
        await BaseDatabase.connection('user_cookenu')
            .update(columnsUpdate)
            .where({ id })
    }

    public getUserById = async (id: string) => {
        const [result] = await BaseDatabase.connection('user_cookenu')
            .select("*")
            .where({ id })
            return result
    }
    
    public getByEmail = async (email: string) => {
        const [result] = await BaseDatabase.connection('user_cookenu')
            .select("*")
            .where({ email })
        return result
    }
}
import { BaseDatabase } from "./BaseDatabase";
import User from "../model/User";
import { FindByEmailResponse } from "../types/FindByEmailResponse";

export default class UserData  extends BaseDatabase{
   
    protected TABLE_NAME = "labook_users"

    async findByEmail(email:string){
        try{
            const result: FindByEmailResponse = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({email})

            return result[0]
        }catch(error:any){
            throw new Error("Erro findByEmail")
        }
    }

    async insert(user:User){
        await this.connection(this.TABLE_NAME)
         .insert(user)
    }
    
}
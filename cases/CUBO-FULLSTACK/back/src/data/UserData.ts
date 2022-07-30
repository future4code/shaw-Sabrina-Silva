import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";


class UserData extends BaseDatabase{
    protected TABLE_NAME = "infos_user"

    insert = async (user: User) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(user)   

        } catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    selectUsers = async () => {
        try {
          const result = await this.connection(this.TABLE_NAME)
                .select('*')              
                return result
        } catch (error: any) {
            throw new Error(error.sqlMessage)

        }
    }

}

export default UserData
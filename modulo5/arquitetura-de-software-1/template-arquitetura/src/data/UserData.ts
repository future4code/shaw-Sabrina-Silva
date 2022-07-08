import { connection } from "../connection"
import { user } from "../types/user"

class UserData {

   async insertUser(user: user) {
      await connection.insert({
         id: user.id,
         name: user.name,
         nickname: user.nickname,
         email: user.email,
         password: user.password,
         role: user.role
      }).into('to_do_list_users')
   }

   async selectUserByEmail(email: string) {
      const result = await connection("to_do_list_users")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         nickname: result[0].nickname,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }
   }

   async selectUsers() {
      const result = await connection("to_do_list_users")
         .select("*")

      return result
   }


   async deleteUser(id: string) {
      await connection("to_do_list_users")
         .delete("*")
         .where({ id })
   }
}

export default UserData
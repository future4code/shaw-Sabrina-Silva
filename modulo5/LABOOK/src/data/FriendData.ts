import { BaseDatabase } from "./BaseDatabase";

export default class FriendData extends BaseDatabase {

    protected TABLE_NAME = "friends"

    async makeFriend(your_id: string, friend_id: string) {
        try {

            await this.connection(this.TABLE_NAME)
                .insert({ your_id: your_id, friend_id: friend_id })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteFriend(your_id: string, friend_id: string) {
        try {
            await this.connection(this.TABLE_NAME)
                .delete()
                .from(this.TABLE_NAME)
                .where({ your_id, friend_id })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectFriend(your_id: string, friend_id: string){
        try{
           const [result] =  await this.connection(this.TABLE_NAME)
            .select("*")
            .where({your_id, friend_id})
            
            return result
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectAllFriendsPosts(){
        try{
            const result = await this.connection(this.TABLE_NAME)
            .select("*")
            .from(this.TABLE_NAME)
            .innerJoin("friends", "friends.friend_id",)
            

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
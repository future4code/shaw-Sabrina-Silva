import { BaseDatabase } from "./BaseDatabase";

export default class FriendData  extends BaseDatabase{
   
    protected TABLE_NAME = "friends"

    async makeFriend(your_id: string, friend_id:string){
        await this.connection(this.TABLE_NAME)
        .insert({your_id: your_id, friend_id: friend_id})
    }

    // async deleteFriend(your_id: string, friend_id:string){
    //     await this.connection(this.TABLE_NAME)
    //     .delete(your_id, friend_id)
    // }
    
}
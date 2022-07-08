import FriendData from "../data/FriendData";

export default class FriendBusiness {
    constructor(
        private friendData: FriendData
    ){}

    async inviteFriend(your_id: string, friend_id:string){


        const invite = this.friendData.makeFriend(your_id, friend_id)

        // if (!your_id || friend_id) {
        //     throw new Error("Id não encontrado")
        // }

        return invite
    }
}
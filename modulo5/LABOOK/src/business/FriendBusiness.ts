import FriendData from "../data/FriendData";

export default class FriendBusiness {
    constructor(
        private friendData: FriendData
    ) { }

    async inviteFriendBusiness(your_id: string, friend_id: string) {

        const verifyFriendship = await this.friendData.selectFriend(your_id, friend_id)

        if (verifyFriendship) {
            throw new Error("Friendship already exists")
        }

        const invite = await this.friendData.makeFriend(your_id, friend_id)

        if (your_id !== String(your_id) || friend_id !== String(friend_id)) {
            throw new Error("Invalid values")
        }

        if (!your_id || !friend_id) {
            throw new Error("Not found")
        }

        return invite
    }

    async deleteFrienBusiness(your_id: string, friend_id: string) {
        
        if (your_id !== String(your_id) || friend_id !== String(friend_id)) {
            throw new Error("Invalid values")
        }

        if (!your_id || !friend_id) {
            throw new Error("Not found")
        }
        
        const deleteFriend = await this.friendData.deleteFriend(your_id, friend_id)

        return deleteFriend
    }
}
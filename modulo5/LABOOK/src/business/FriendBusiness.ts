import FriendData from "../data/FriendData";

export default class FriendBusiness {
    constructor(
        private friendData: FriendData
    ) { }

    async inviteFriendBusiness(your_id: string, friend_id: string, token:string) {
        
        if (!token) {
            throw new Error('Please provide a token')
        }

        if (token !== String(token)) {
            throw new Error('Invalid values')
        }

        const verifyFriendship = await this.friendData.selectFriend(your_id, friend_id)

        if (verifyFriendship) {
            throw new Error("Friendship already exists")
        }

        const invite = await this.friendData.makeFriend(your_id, friend_id)

        if (!your_id || !friend_id) {
            throw new Error("Not found")
        }

        return invite
    }

    async deleteFrienBusiness(your_id: string, friend_id: string, token:string) {
        
        if (!token) {
            throw new Error('Please provide a token')
        }

        if (token !== String(token)) {
            throw new Error('Invalid values')
        }
        
        const verifyFriendship = await this.friendData.selectFriend(your_id, friend_id)

        if (!verifyFriendship) {
            throw new Error("Friend not found")
        }
        
        if (!your_id || !friend_id) {
            throw new Error("Not found")
        }
        
        const deleteFriend = await this.friendData.deleteFriend(your_id, friend_id)

        return deleteFriend
    }
}
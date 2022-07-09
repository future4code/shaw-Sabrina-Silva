import { Request, Response } from "express";
import FriendBusiness from "../business/FriendBusiness";
import FriendData from "../data/FriendData";

export default class FriendController {

    async postInviteFriend(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string

            const your_id = req.params.your_id
            const friend_id = req.body.friend_id

            const friendBusiness = new FriendBusiness(new FriendData())

            await friendBusiness.inviteFriendBusiness(your_id, friend_id, token)

            res.status(201).send({ message: "Now you are friends" })

        } catch (error: any) {
            res.status(500).send({ message: error.message || error.sqlMessage })
        }
    }

    async deleteFriendship(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string
            
            const your_id = req.params.your_id
            const friend_id = req.params.friend_id

            const friendBusiness = new FriendBusiness(new FriendData())

            await friendBusiness.deleteFrienBusiness(your_id, friend_id, token)
            
            res.status(201).send({ message: "Broken friendship" })

        } catch (error: any) {
            res.status(500).send({ message: error.message || error.sqlMessage })
        }
    }

}
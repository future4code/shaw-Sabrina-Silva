import { Request, Response } from "express";
import FriendBusiness from "../business/FriendBusiness";
import FriendData from "../data/FriendData";

export default class FriendController {
    async postInviteFriend(req: Request, res: Response){
       
        const your_id = req.params.your_id
        const friend_id = req.body

        const friendBusiness = new FriendBusiness( new FriendData())

         await friendBusiness.inviteFriend(your_id, friend_id)

        res.status(201).send({ message: "Agora vcs são amigos"})

    }

}
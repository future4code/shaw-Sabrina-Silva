import { POST_ROLES } from "../model/Post";

export type PostInputDTO = {
    photo: string,
    description: string,
    type: POST_ROLES,
}
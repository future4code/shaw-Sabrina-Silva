import { PostData } from "../data/PostData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/Generator";
import moment from "moment";
import { PostInputDTO } from "../types/PostInputDTO";
import Post from "../model/Post"

export default class PostBusiness {
    constructor(
        private postData: PostData,
    ) { }

    async createPost(post: PostInputDTO) {

        const { photo, description, type, autor_id } = post

        const id = IdGenerator.generateId()

        const create_at = moment().format("YYYY-MM-DD")

        const modelPost = new Post(
            id,
            photo,
            description,
            type,
            create_at,
            autor_id
        )

       const newPost = await this.postData.insertPost(modelPost)

            return newPost
    }

    async getPost(id: string){
        
        const post = await this.postData.selectById(id)

        return post
    }
}
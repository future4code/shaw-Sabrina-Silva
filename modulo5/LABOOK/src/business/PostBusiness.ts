import { PostData } from "../data/PostData";
import { IdGenerator } from "../services/Generator";
import moment from "moment";
import { PostInputDTO } from "../types/PostInputDTO"
import Post from "../model/Post"
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../types/authData";

export default class PostBusiness {
    constructor(
        private postData: PostData,
    ) { }

    async createPost(post: PostInputDTO, token: string) {

        if (!token) {
            throw new Error('Not authorized')
        }

        const { photo, description, type } = post

        if (!photo || !description || !type) {
            throw new Error('Fill in the fields, please')
        }

        if (photo !== String(photo) || description !== String(description) || type !== String(type)) {
            throw new Error('Invalid values')
        }

        const id = IdGenerator.generateId()

        const create_at = moment().format("YYYY-MM-DD")

        const authenticator = new Authenticator()

        const autorId: authenticationData = authenticator.getTokenData(token)

        const autor_id = String(autorId.id)

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

    async getPost(id: string, token: string) {

        if (!token) {
            throw new Error('Please provide a token')
        }

        if (!id) {
            throw new Error('Not found')
        }

        const post = await this.postData.selectById(id)

        if (!post) {
            throw new Error('Post not found!')
        }

        return post
    }

    async getPostsByPage(page: number, token: string) {

        if (page !== Number(page)) {
            throw new Error('Invalid values')
        }

        if (!token) {
            throw new Error('Please provide a token')
        }

        const postByPage = await this.postData.selectAllPostsByPage(page)

        return postByPage
    }

    async getPostByType(type:string){
        
    }
}
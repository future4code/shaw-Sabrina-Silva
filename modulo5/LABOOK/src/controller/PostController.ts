import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness"
import { PostData } from "../data/PostData"
import { PostInputDTO } from "../types/PostInputDTO"

export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    async createPost(req: Request, res: Response){
        try{
            const { photo, description, type} = req.body

            const token: string = req.headers.authorization as string

            const input: PostInputDTO = {
                photo, description, type
            }

            const post = new PostBusiness( new PostData())

             await post.createPost(input, token)

            res.status(201).send({ message: "Post created"})

        }catch(error:any){
            res.send({ message: error.sqlMessage || error.message })
        }
    }


    async getPostById(req: Request, res: Response){
        try{

            const token: string = req.headers.authorization as string

            const id = req.params.id

            const post = new PostBusiness( new PostData())
            const newPost = await post.getPost(id, token)

            res.status(201).send({newPost} )

        }catch(error:any){

            res.send({ message: error.sqlMessage || error.message })
        }
    }

    async getPostsByPage(req: Request, res: Response){
        try{
            const token: string = req.headers.authorization as string

            const page = Number(req.params.page)

            const post = new PostBusiness( new PostData())
            
            const postByPage = await post.getPostsByPage(page, token)

            console.log(postByPage);
            
            res.status(201).send(postByPage)

        }catch (error:any){
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}
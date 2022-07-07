import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness"
import { PostData } from "../data/PostData"
import { Authenticator } from "../services/Authenticator"
import { PostInputDTO } from "../types/PostInputDTO"

export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    async createPost(req: Request, res: Response){
        try{
            const { photo, description, type, autor_id } = req.body

            const token: string = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error('Não autorizado.')
             }

             if (!photo || !description || !type || !autor_id ) {
                res.statusCode = 401
                throw new Error('Preencha os campos')
            }

            if (photo !== String(photo) || description !== String(description)|| type !== String(type)|| autor_id !== String(autor_id) ) {
                res.statusCode = 401
                throw new Error('Valores invalidos')
            }

            const input: PostInputDTO = {
                photo, description, type, autor_id
            }

            const post = new PostBusiness( new PostData())

             await post.createPost(input)

            res.status(201).send({ message: "Post cadastrado com sucesso"})

        }catch(error:any){
            res.send({ message: error.sqlMessage || error.message })
            // if(error instanceof Error){
            //     return res.status(400).send(error.message)
            // }
            // res.status(500).send("Erro creatPost!")
        }
    }


    async getPostById(req: Request, res: Response){
        try{

            const token: string = req.headers.authorization as string
           
            if (!token) {
                res.statusCode = 401
                throw new Error('Não autorizado.')
             }

            const id = req.params.id

            if (id === "") {
                res.statusCode = 401
                throw new Error('Sem id')
             }


            const post = new PostBusiness( new PostData())
            const newPost = await post.getPost(id)
          
            if (!newPost) {
                res.statusCode = 401
                throw new Error('Post not found!')
             }

            res.status(201).send({newPost} )

        }catch(error:any){

            res.send({ message: error.sqlMessage || error.message })
        }
    }
}
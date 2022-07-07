import moment from "moment"
import Post from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostData extends BaseDatabase{

    protected TABLE_NAME = "labook_posts"

    async insertPost(post: Post){
        try{
            await this.connection(this.TABLE_NAME)
            .insert(post)
        }catch(error:any){
            throw new Error("Erro insertPost")
        }
    }

    async selectById(id:string): Promise<Post>{
        const [result] = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({id})

    const create_at = moment(result.create_at).format("DD-MM-YYYY")

    const post:any =  {
            id: result.id,
            photo: result.photo,
            description: result.description,
            type: result.type,
            create_at: create_at,
            autor_id: result.autor_id
        }
        
        return  post
    }

    async selectCreateAt(id:string){
        const [result] = await this.connection(this.TABLE_NAME)
        .select("create_at")
        .where({id})
       
        return result
    }
    
}
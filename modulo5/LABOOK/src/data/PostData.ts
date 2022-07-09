import moment from "moment"
import Post from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostData extends BaseDatabase {

    protected TABLE_NAME = "labook_posts"

    async insertPost(post: Post) {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(post)
            console.log(post);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectById(id: string): Promise<Post> {
        try {
            const [result] = await this.connection(this.TABLE_NAME)
                .select("*")
                .where({ id })

            const create_at = moment(result.create_at).format("DD-MM-YYYY")

            const post: any = {
                id: result.id,
                photo: result.photo,
                description: result.description,
                type: result.type,
                create_at: create_at,
                autor_id: result.autor_id
            }

            return post
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectCreateAt(id: string) {
        try {
            const [result] = await this.connection(this.TABLE_NAME)
                .select("create_at")
                .where({ id })

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectAllPostsByPage(page: number) {
        try {
            const size = 5

            let offset = size * (page - 1)

            const result = await this.connection(this.TABLE_NAME)
                .select("*")
                .limit(size)
                .offset(offset)


            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectPostByType(type: string, sort: string, order: string) {
        try {
            const result = await this.connection(this.TABLE_NAME)
                .select("*")
                .where("type", "like", `${type}`)
                .orderBy(sort, order)
                
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }



}
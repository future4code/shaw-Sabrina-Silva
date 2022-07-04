import { connection } from "../connection";
import { task } from "../types/task";

export class TaskData{
    async insertTask(task:task){
        const [result] =  await connection('to_do_list_tasks')
        .insert({
           id: task.id,
           title: task.title,
           description: task.description,
           user_id: task.user_id
        })
        return result
    }

    async selectTask(id:string){
        const [result] = await connection('to_do_list_tasks')
        .select("*")
        .where({id})

   return result
    }
}
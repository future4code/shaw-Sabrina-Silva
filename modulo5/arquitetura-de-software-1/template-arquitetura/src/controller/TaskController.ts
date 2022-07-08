import { Request, Response } from "express"
import TaskBussines from "../Bussines/TaskBussines"
import { taskInput } from "../types/task"

export class TaskController{

    async postTask(req: Request, res:Response){
        try{
            const {title, description, user_id} = req.body

            const newTask: taskInput = {
                title,
                description,
                user_id
            }
        
        const taskBussines = new TaskBussines()

        const task = await taskBussines.createTask(newTask)

        res.status(201).send({ message: "tarefa criada com sucesso", task})

        }catch(error:any){
            res.status(500).send({ message: error.message})
        }
    }

    async getTasks(req: Request, res:Response){
        try{
            const id = req.params.id

            const taskBussines = new TaskBussines()

            const task = await taskBussines.selectTasks(id)

            res.status(201).send(task)

        }catch(error:any){
            res.status(500).send({ message: error.message })
        }
    }
}
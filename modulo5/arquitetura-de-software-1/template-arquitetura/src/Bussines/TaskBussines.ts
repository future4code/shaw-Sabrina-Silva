import { TaskData } from "../data/TaskData";
import { generateId } from "../services/idGenerator";
import { task, taskInput } from "../types/task";

class TaskBussines{
    async createTask(task:taskInput){

        const {title, description, user_id} = task

        if (!title || !description || !user_id ) {
            throw new Error('Preencha os campos')
        }

        const id: string = generateId()

        const taskData = new TaskData()

        const newTask = {
            id,
            title,
            description,
            user_id
        }
         taskData.insertTask(newTask)

        return newTask

    }

    async selectTasks(id:string){

        const taskData = new TaskData()

        const taskDB = taskData.selectTask(id)

        return taskDB
    }
}

export default TaskBussines
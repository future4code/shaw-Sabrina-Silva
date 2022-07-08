import moment from "moment";
import { Recipe, RecipeEdit } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDataBase extends BaseDatabase {
    public create = async (newRecipe: Recipe) => {
        try {
            await BaseDatabase.connection('recipes_cookenu')
                .insert(newRecipe)

        } catch (error: any) {

            throw new Error(error.sqlMessage || error.message)
        }

    }

    public selectRecipeById = async (id: string): Promise<Recipe> => {
        const [result] = await BaseDatabase.connection('recipes_cookenu')
            .select("*")
            .where({ id })

        return result
    }

    public selectRecipe = async () => {
        try {
            const [result] = await BaseDatabase.connection.raw(`
        SELECT recipes_cookenu.id , 
        recipes_cookenu.title, 
        recipes_cookenu.description, 
        recipes_cookenu.createDate, 
        recipes_cookenu.user_id, 
        user_cookenu.name
        FROM recipes_cookenu
        JOIN user_cookenu`)

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public edit = async (id: string, title: string, description: string): Promise<void> => {
        try {
             await BaseDatabase.connection('recipes_cookenu')
                .update(title, description)
                .where({ id })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public delete = async (id: string) => {
        try {
            const result = await BaseDatabase.connection()
                .delete()
                .from('recipes_cookenu')
                .where({ id })

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}
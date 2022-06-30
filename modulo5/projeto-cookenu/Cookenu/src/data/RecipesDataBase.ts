import { Recipe } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDataBase extends BaseDatabase {
    public create = async (newRecipe: Recipe) => {
        try {
            await BaseDatabase.connection('recipes_cookenu')
                .insert(newRecipe)

        } catch (error: any) {

            throw new Error("Erro inesperado no servidor")
        }

    }

    public selectRecipeById = async (id: string):Promise<Recipe> => {
        const [result] = await BaseDatabase.connection('recipes_cookenu')
            .select("*")
            .where({ id })

           // results.
            console.log(result)
        return result
    }


}
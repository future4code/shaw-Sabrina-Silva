import { Recipe } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDataBase extends BaseDatabase {
    public create = async (newRecipe: Recipe) => {
        try{
            await BaseDatabase.connection('recipes_cookenu')
            .insert(newRecipe)

        }catch (error:any){
            console.log(error);
            
            throw new Error("Erro inesperado no servidor")
        }

    }


}
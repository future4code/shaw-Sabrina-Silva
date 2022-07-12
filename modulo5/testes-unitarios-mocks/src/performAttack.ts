import { Character } from "../types/Character";
import { validateCharter } from "./validateCharacter";

export const performAttack = (attacker: Character, defender: Character, validator:(input: Character)=> boolean) =>{
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Personagem invalido");
    }

    if(attacker.strength > defender.defense){
      const result = attacker.strength - defender.defense
      defender.life =  defender.life - result 
    }
}

// export const performAttack = (attacker: Character, defender: Character) =>{
//     if(!validateCharter(attacker) || !validateCharter(defender)){
//         throw new Error("Personagem invalido");
//     }

//     if(attacker.strength > defender.defense){
//       const result = attacker.strength - defender.defense
//       defender.life =  defender.life - result 
//     }
// }

//C)
import { User } from "../types/User";

export const performPurchase = (user: User, value:number):User | undefined=>{
    if(user.saldo >= value){
        return {...user, saldo: user.saldo - value}
    }else{
        return undefined
    }

}
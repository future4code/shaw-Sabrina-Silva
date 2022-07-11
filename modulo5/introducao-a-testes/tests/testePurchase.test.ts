import {User} from "../types/User"
import {performPurchase} from "../src/testUser"

describe("Primeiro teste", ()=>{
    test("Verifica se o usuaria faz compra ou não", ()=>{
        const user:User = { 
            nome:"Matheusinho_DELICIA",
            saldo: 900
        }
        const result = performPurchase(user, 500)

        expect(result).toEqual({ nome:"Matheusinho_DELICIA",
        saldo: 400})
    })
})

describe("Segundo teste", ()=>{
    test("Verifica se o usuaria faz compra ou não", ()=>{
        const user:User = { 
            nome:"Matheusinho_DELICIA",
            saldo: 900
        }
        const result = performPurchase(user, 900)

        expect(result).toEqual({ nome:"Matheusinho_DELICIA",
        saldo: 0})
    })
})

describe("Terceiro teste", ()=>{
    test("Verifica se o usuaria faz compra ou não", ()=>{
        const user:User = { 
            nome:"Matheusinho_DELICIA",
            saldo: 900
        }
        const result = performPurchase(user, 1000)

        expect(result).toBeUndefined
    })
})
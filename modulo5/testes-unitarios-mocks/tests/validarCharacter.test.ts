import { validateCharter } from "../src/validateCharacter"
import { Character } from "../types/Character"

describe("Teste para validar o personagem", ()=>{
    test("Teste para nome vazio", ()=>{
        const input:Character = {
            name: "",
            life: 100,
            strength: 257,
            defense: 170
        } 

        const result = validateCharter(input)
        expect(result).toBe(false)

    })

    test("Teste para vida igual 0", ()=>{
        const input:Character = {
            name: "Sabrina",
            life: 0,
            strength: 257,
            defense: 170
        } 
        const result = validateCharter(input)
        expect(result).toBe(false)
    })

    test("Teste para força igual 0", ()=>{
        const input:Character = {
            name: "Matheus",
            life: 100,
            strength: 0,
            defense: 170
        } 
        const result = validateCharter(input)
        expect(result).toBe(false)
    })

    test("Teste para defesa igual 0", ()=>{
        const input:Character = {
            name: "Renatta",
            life: 100,
            strength: 257,
            defense: 0
        } 
        const result = validateCharter(input)
        expect(result).toBe(false)
    })

    test("Teste para força ou defesa negativos", ()=>{
        const input:Character = {
            name: "Liliane",
            life: 100,
            strength: -257,
            defense: 170
        } 
        const result = validateCharter(input)
        expect(result).toBe(false)
    })

    test("Teste para informações validas", ()=>{
        const input:Character = {
            name: "Hayley",
            life: 100,
            strength: 420,
            defense: 145
        } 
        const result = validateCharter(input)
        expect(result).toBe(true)
    })
})
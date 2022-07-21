import { performAttack } from "../src/performAttack"
import { Character } from "../types/Character"

describe("Teste de ataque", () => {
    test("Testando personagens com valores validos", () => {
        try {
            const attacker: Character = {
                name: "Naruto",
                life: 1500,
                strength: 600,
                defense: 200
            }
            const defender: Character = {
                name: "Sasuke",
                life: 1500,
                strength: 800,
                defense: 400
            }

            const validatorMock = jest.fn(() => {
                return true
            })

            performAttack(attacker, defender, validatorMock)

            expect(defender.life).toEqual(1300);
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(2);
            expect(validatorMock).toHaveReturnedTimes(2);

        } catch (error) {
            error.message
        }
    })

    test("Testando personagens com valores invalidos", () => {
        const attacker: Character = {
            name: "",
            life: 1500,
            strength: 600,
            defense: 200
        }
        const defender: Character = {
            name: "Sasuke",
            life: 1500,
            strength: 800,
            defense: 400
        }

        const validatorMock = jest.fn(() => {
            return false
        })
        try {
            performAttack(attacker, defender, validatorMock)

        } catch (err) {
            expect(err.message).toBe("Personagem invalido");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);

        }
    })
})
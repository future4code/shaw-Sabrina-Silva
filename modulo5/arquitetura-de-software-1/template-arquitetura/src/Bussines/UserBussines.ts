import { generateToken, getTokenData } from "../services/authenticator";
import { compare, hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { userInput, userLogin } from "../types/user";
import UserData from '../data/UserData'

class UserBussines {

    // metodo da classe
    async signUp(user: userInput) {

        const { name, nickname, email, password, role } = user

        // 1 regra de negocio - validar os valores 
        if (
            !name ||
            !nickname ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        // 2 regra de negocio - gerar meu id 
        const id: string = generateId()

        // 3 regra de negocio - fazer o hash da senha
        const cypherPassword = await hash(password);


        // 4 regra de negocio - inserir os valores no banco de dados
        const userData = new UserData()

        await userData.insertUser({
            id,
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        })

        // 5 regra de negocio - gerar o token
        const token: string = generateToken({
            id,
            role: role
        })

        return token

    }

    async login(user: userLogin) {

        const { email, password } = user

        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        if (email !== String(email) || password !== String(password)) {
            throw new Error("Valores invalidos")
        }

        const userData = new UserData()

        const userDB = await userData.selectUserByEmail(email)

        if (!userDB) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await compare(password, userDB.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = generateToken({
            id: userDB.id,
            role: userDB.role
        })

        return token
    }

    async getUsers(token: string) {

        if (!token) {
            throw new Error('Não autorizado.')
         }

        const userData = new UserData()

        const userDB = await userData.selectUsers()

        if (!userDB) {
            throw new Error("Sem usuários")
        }

        return userDB
    }

    async deleteUsers(id: string, token:string) {

        if (!token) {
            throw new Error('Não autorizado.')
         }

        const authenticationData = getTokenData(token)

        if(authenticationData.role !== "ADMIN"){
            throw new Error('Não autorizado.')
        }

        const userData = new UserData()

         await userData.deleteUser(id)

    }
}

export default UserBussines
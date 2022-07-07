import { compare } from "bcryptjs";
import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/Generator";
import { HashManager } from "../services/HashManager";
import { LoginInputDTO } from "../types/LoginInputDTO";
import { SingupInputDTO } from "../types/singupInputDTO";

export default class UserBusiness {
    constructor(
        private userData: UserData,
        private hashManager: HashManager,
        private authenticator: Authenticator,
    ) { }

    async singup(input: SingupInputDTO) {
        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const registeredUser = await this.userData.findByEmail(email)

        if (registeredUser) {
            throw new Error("Usuário já cadastrado")
        }

        const id = IdGenerator.generateId()

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        await this.userData.insert(user)

        const token = this.authenticator.generateToken({ id })

        return token
    }

    async login(user: LoginInputDTO) {
        const { email, password } = user

        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        if (email !== String(email) || password !== String(password)) {
            throw new Error("Valores invalidos")
        }

        const registeredUser = await this.userData.findByEmail(email)

        if (!registeredUser) {
            throw new Error("Email ou senha invalidos")
        }

        const passwordIsCorrect: boolean = await compare(password, registeredUser.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token = this.authenticator.generateToken({id: registeredUser.id })

        return token
    }


}
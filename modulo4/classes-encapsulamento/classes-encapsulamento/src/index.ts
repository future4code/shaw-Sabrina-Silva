// ---- EXERCICIO 1 ----
//a)O constructor serve para otmizarmos a nossa construção do objeto, passando os valores por parametro quando chamado fora da função
//  new UserAccount("21478541", "Sabrina", 25)
//b) Uma
//c)Pelos metodos de getters.

// ---- EXERCICIO 2 ----

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.description = description
        this.value = value
        this.date = date
    }

    public getTransaction(): Array<Object> {
        return ([this.description, this.value, this.date])
    }

}

const transaction = new Transaction("Descrição", 200, "2022-06-20")

// console.log(transaction.getTransaction());

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Array<Object> = transaction.getTransaction();

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        //console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.balance
        this.transactions
    }

    getName(): string {
        return this.name
    }

    getCPF(): string {
        return this.cpf
    }

    getAge(): number {
        return this.age
    }

    getTrans(): object[] {
        return this.transactions
    }

}

const account: any = new UserAccount("21478541", "Sabrina", 25)

//  console.log(account.getName())

//  console.log(account.getCPF())

//  console.log(account.getAge())

//  console.log(account.getTrans())

// ---- EXERCICIO 3 ----

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccount() {
        return this.accounts
    }
}

const newAccount = new Bank(account)

console.log(newAccount.getAccount())
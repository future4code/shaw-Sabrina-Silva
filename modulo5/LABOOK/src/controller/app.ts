import dotenv from "dotenv"
import express, { Express } from "express"
import cors from "cors"
import {AddressInfo} from "net"

dotenv.config()

export const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003,()=>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log("Servidor rodando na porta 3003")
    }else{
        console.log("Servidor não encontrado");
        
    }
})
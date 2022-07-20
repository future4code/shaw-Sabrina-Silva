import { VisibilityOff, Visibility } from "@mui/icons-material";
import {  IconButton } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Constants/url";
import { goToFeed } from "../../Router/coordinator";
import { ButtonStyled, DivPassword, Form, Main, InputMaterial} from "./styled";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword]= useState(true)
    const [errEmail, setErrEmail] = useState("")
    const [errPass, setErrPass] = useState("")
    const [checkErrEmail, setCheckErrEmail] = useState(false)
    const [checkErrPass, setCheckErrPass] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const userLogin = {
            email,
            password
        }

        loginApi(userLogin)
    }

    const loginApi = async(body) => {
        await axios.post(`${BASE_URL}/login`, body)
        .then((res)=> {
            setEmail('')
            setPassword('')
            setErrEmail('')
            setErrPass('')
            setCheckErrPass(false)
            setCheckErrEmail(false)
            localStorage.setItem('token', res.data.token)
            alert(`Bem vindo(a) ${res.data.user.name}`)
            goToFeed(navigate)
        })
        .catch((err)=>{
            if(err.response.data.message.includes("Senha incorreta")){
                setErrPass(err.response.data.message)
                setCheckErrPass(true)
                }else{
                setErrEmail(err.response.data.message)
                setCheckErrEmail(true)
            }
        })
    }

    
    return(
        <Main>
            <p>Entrar</p>
            <Form onSubmit= {onSubmitLogin}>
            <InputMaterial
            error={checkErrEmail}
            helperText={checkErrEmail ? errEmail: ""}
            id="outlined-basic1" 
            label="Email" 
            type={'email'}
            variant="outlined" 
            placeholder={"email@email.com"}
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required
            />
            <DivPassword>
            <InputMaterial 
            error={checkErrPass}
            helperText={checkErrPass ? errPass: ""}
            id="outlined-basic2" 
            label="Password" 
            type={showPassword ?'password' : 'text'}
            variant="outlined"
            placeholder={"Minímo 6 caracteres"}
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            inputProps={{ minLength: 6, title:"A senha deve conter no minímo 6 caracteres"}}
            required
            />
            <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
          </DivPassword>
            <ButtonStyled type= "submit">Entrar</ButtonStyled>
            </Form>

        </Main>
    )
}

export default Login
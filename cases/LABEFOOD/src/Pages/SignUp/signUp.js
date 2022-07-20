import React from "react";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import {  IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { ButtonStyled, DivPassword, Form, Main, InputMaterial} from "./styled";

const SignUp = () => {
    const [showPassword, setShowPassword]= useState(true)
    const [showCheckPassword, setShowCheckPassword]= useState(true)
    const [confirmPassword, setConfirmPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleClickCheckShowPassword = () => {
        setShowCheckPassword(!showCheckPassword)
    }

    const {form, onChange, clean} = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    const onSubmitForm = (event)=> {
        event.preventDafault()
        console.log(form);
    }

    const cpfMask = (value)=>{
        return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }

    return(
        <Main>
         <p>Cadastrar</p>
            <Form onSubmit={onSubmitForm}>
                <InputMaterial
                id= "outline-basic1"
                label={"Nome"}
                name='name'
                type={"text"}
                placeholder={"Nome"}
                variant={"outlined"}
                value={form.name}
                onChange={onChange}
                required
                />
                <InputMaterial
                id= "outline-basic2"
                label={"Email"}
                name='email'
                type={"email"}
                placeholder={"email@email.com"}
                variant={"outlined"}
                value={form.email}
                onChange={onChange}
                required
                />
                 <InputMaterial
                id= "outline-basic3"
                label={"CPF"}
                name="cpf"
                type={"text"}
                placeholder={"CPF"}
                variant="outlined"
                value={cpfMask(form.cpf)}
                onChange={onChange}
                required
                />

            <DivPassword>
            <InputMaterial 
            //error={checkErrPass}
            //helperText={checkErrPass ? errPass: ""}
            id="outlined-basic4" 
            label="Password" 
            type={showPassword ?'password' : 'text'}
            variant="outlined"
            placeholder={"Minímo 6 caracteres"}
            value={form.password}
            onChange={onChange}
            inputProps={{ minLength: 6, title:"A senha deve conter no minímo 6 caracteres"}}
            required
            />
            <InputMaterial 
           // error={checkErrPass}
            //helperText={checkErrPass ? Deve ser a mesma da anterior : ""}
            id="outlined-basic4" 
            label="Password" 
            type={showPassword ?'password' : 'text'}
            variant="outlined"
            placeholder={"Minímo 6 caracteres"}
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
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

export default SignUp
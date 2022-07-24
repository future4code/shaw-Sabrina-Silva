import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Constants/url";
import logo from "../../Assets/ImgLogo/logo-future-eats-invert.png"
import { goToFeed, goToSignUp } from "../../Router/coordinator";
import { ButtonStyled, DivPassword, Form, Main, InputMaterial, ButtonSingUp, LogoImg } from "./styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");
  const [checkErrEmail, setCheckErrEmail] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);

  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const userLogin = {
      email,
      password,
    };

    loginApi(userLogin);
  };

  const loginApi = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail("");
        setPassword("");
        setErrEmail("");
        setErrPass("");
        setCheckErrPass(false);
        setCheckErrEmail(false);
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
      })
      .catch((err) => {
        if (err.response.data.message.includes("Senha incorreta")) {
          setErrPass(err.response.data.message);
          setCheckErrPass(true);
        } else {
          setErrEmail(err.response.data.message);
          setCheckErrEmail(true);
        }
      });
  };

  return (
    <Main>
      <LogoImg src={logo}/>
      <h3>Entrar</h3>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          error={checkErrEmail}
          helperText={checkErrEmail ? errEmail : ""}
          id="outlined-basic1"
          label="Email"
          type={"email"}
          variant="outlined"
          placeholder={"email@email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <DivPassword>
          <FormControl variant="outlined" required fullWidth>
          <InputLabel shrink htmlFor="outlined-adornment-password">
            Senha
          </InputLabel>
          <OutlinedInput
            error={checkErrPass}
            helperText={checkErrPass ? errPass : ""}
            id="outlined-adornment-password1"
            type={showPassword ? "password" : "text"}
            name={"password"}
            label={"Senha"}
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            placeholder={"Mínimo 6 caracteres"}
            inputProps={{
              pattern: "^.{6,}$",
              title: "Senha deve possuir no mínimo 6 caracteres",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}                 
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            notched
            labelWidth={59}
          />
       </FormControl>
        </DivPassword>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
      <p>Não possui cadastro? </p><ButtonSingUp onClick={() =>goToSignUp(navigate)}>Clique aqui</ButtonSingUp>
    </Main>
  );
};

export default Login;

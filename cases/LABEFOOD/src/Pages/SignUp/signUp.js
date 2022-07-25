import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpAdress } from "../../Router/coordinator";
import BASE_URL from "../../Constants/url";
import axios from "axios";
import Header from "../../Components/Header/Header"
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import logo from "../../Assets/ImgLogo/logo-future-eats-invert.png"
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  ButtonStyled,
  Form,
  Main,
  InputMaterial,
  Title,
  LogoImg
} from "./styled";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkErrPass, setCheckErrPass] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickCheckShowPassword = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  const { form, onChange, clean } = useForm({
    "name": "",
    "email": "",
    "cpf": "",
    "password": ""
  });

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  };

  const signUpUser = async (body, navigate) => {
    try {
      const res = await axios.post(`${BASE_URL}/signup`, body);
      localStorage.setItem("token", res.data.token);
      goToSignUpAdress(navigate);
    } catch (err) {
      alert("Email ou CPF já cadastrados");
      clean()
      setConfirmPassword("")
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (form.password === confirmPassword) {
      setCheckErrPass(false)
      signUpUser(form, navigate);
    } else {
      setCheckErrPass(true);
    }
  };

  return (
    <Main>
      <Header back/>
      <LogoImg src={logo}/>
      <Title>Cadastrar</Title>
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          placeholder={"Nome"}
          type={"text"}
          name={"name"}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          value={form.name}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputMaterial
          label={"Email"}
          name="email"
          type={"email"}
          fullWidth
          placeholder={"email@email.com"}
          variant={"outlined"}
          value={form.email}
          onChange={onChange}
          required
          inputProps={{
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
            title: "Digite um E-mail válido com letras minúsculas",
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputMaterial
          label={"CPF"}
          name="cpf"
          type={"text"}
          fullWidth
          placeholder={"000.000.000-00"}
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl variant="outlined" required fullWidth>
          <InputLabel shrink htmlFor="outlined-adornment-password">
            Senha
          </InputLabel>
          <OutlinedInput
            error={checkErrPass}
            id="outlined-adornment-password1"
            type={showPassword ? "text" : "password"}
            name={"password"}
            label={"Senha"}
            value={form.password}
            required
            onChange={onChange}
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
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            notched
            labelWidth={59}
          />
        </FormControl>
        <FormControl variant="outlined" required fullWidth>
          <InputLabel shrink htmlFor="outlined-adornment-password">
            Confirmar
          </InputLabel>
          <OutlinedInput
            error={checkErrPass}
            helperText={!checkErrPass ? "" : "Deve ser a mesma da anterior"}
            id="outlined-adornment-password2"
            type={showCheckPassword ? "text" : "password"}
            name={"confirmPassword"}
            value={confirmPassword}
            label={"Confirmar"}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={"Confirme sua senha"}
            inputProps={{
              pattern: "^.{6,}$",
              title: "Senha deve possuir no mínimo 6 caracteres",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickCheckShowPassword}
                  edge="end"
                >
                  {showCheckPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            notched
            labelWidth={59}
          />
        </FormControl>
        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default SignUp;

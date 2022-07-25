import React from "react";
import BASE_URL from "../../Constants/url";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { Form, InputMaterial, Title, Main, ButtonStyled } from "./styled";
import { goToFeed } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../Hooks/useProtectedPage";
import Header from "../../Components/Header/Header"


const SignUpAdress = () => {
  useProtectedPage()

    const navigate = useNavigate();

    const {form, onChange} = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
      });

    const onSubmitForm = (event) => {
        event.preventDefault();
        singUpAddAdress()
      };

    const singUpAddAdress = async () => {
        const token = localStorage.getItem('token')

        await axios.put(`${BASE_URL}/address`, form,{
           headers:{auth: token}
        })

        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            goToFeed(navigate)
        })
        .catch((err)=> {
            console.log(err.response.message)
        })
    }

    return( 

     <Main>
      <Header back/>
      <Title>Meu Endereço</Title>
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          placeholder={"Rua/ Av."}
          type={"text"}
          name={"street"}
          label={"Logadouro"}
          variant={"outlined"}
          fullWidth
          value={form.street}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputMaterial
          label={"Número"}
          name="number"
          type={"text"}
          fullWidth
          placeholder={"Número"}
          variant={"outlined"}
          value={form.number}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputMaterial
          label={"Complemento"}
          name="complement"
          type={"text"}
          fullWidth
          placeholder={"Complemento"}
          variant="outlined"
          value={form.complement}
          onChange={onChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputMaterial
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          fullWidth
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
         <InputMaterial
          label={"Cidade"}
          name="city"
          type={"text"}
          fullWidth
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
         <InputMaterial
          label={"Estado"}
          name="state"
          type={"text"}
          fullWidth
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ButtonStyled type="submit">Salvar</ButtonStyled>
        </Form>
    </Main>
        
    )
}

export default SignUpAdress
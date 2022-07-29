import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../../Constants/url";
import { ContainerInput, Form, Input, SendButton } from "./styled";

const InputsInfos = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [participation, setParticipation] = useState("");

  const postUsers = async (body) => {
    await axios
      .post(`${BASE_URL}/create`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      first_name: firstName,
      second_name: secondName,
      participation: Number(participation),
    };

    setFirstName('')
    setSecondName('')
    setParticipation('')

    postUsers(newUser);
  };

  useEffect(() => {}, [firstName, secondName, participation]);

  return (
    <ContainerInput>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Nome"
          type={"text"}
          value={firstName}
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        <Input
          placeholder="Sobrenome"
          type={"text"}
          value={secondName}
          required
          onChange={(event) => setSecondName(event.target.value)}
        />
        <Input
          placeholder="Participação"
          type={"number"}
          value={participation}
          required
          onChange={(event) => setParticipation(event.target.value)}
        />
        <SendButton type="submit">Enviar</SendButton>
      </Form>
    </ContainerInput>
  );
};

export default InputsInfos;

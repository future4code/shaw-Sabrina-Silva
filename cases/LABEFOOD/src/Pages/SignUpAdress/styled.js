import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const Title = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 28px;
  margin-bottom: 20px;
`;

export const InputMaterial = styled(TextField)`
  width: 100%;
  margin-top: 10px;
`;

export const Main = styled.div`
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1rem;
    padding: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  gap: 16px;
  max-width: 450px;
  button {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const ButtonStyled = styled(Button)`
  && {
    color: #000;
    background-color: #E8222E;
    width: 100%;
  }
`;

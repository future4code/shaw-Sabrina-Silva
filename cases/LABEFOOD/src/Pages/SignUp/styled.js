import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const LogoImg = styled.img`
margin: 5% 0 5% 0;
`

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputMaterial = styled(TextField)`
  width: 100%;
  margin-top: 10px;
`;

export const Main = styled.div`
  
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

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivCheckPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonStyled = styled(Button)`
  && {
    color: #000;
    background-color: #E8222E;
    font-weight: 700;
    font-size: 1.050rem;
    width: 100%;
  }
`;

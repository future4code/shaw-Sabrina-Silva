import styled from "styled-components";
import { TextField } from "@mui/material";

export const ContainerFeed = styled.div``;

export const CardsRestaurant = styled.div`
  margin-top: 0.8rem;
  padding: 0 1rem;
  padding-bottom: 11rem;
`;

export const BoxInputSearch = styled.div`
  padding: 0 1rem;
  margin-top: 0.5rem;
`;

export const InputSearch = styled(TextField)`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px #E8222E;
  //margin-bottom: 2rem;
`;

export const Menu = styled.nav`
  height: 2.625rem;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
  width: 100%;
  overflow-x:auto;
`;
export const MenuItem = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: ${(p)=> p.select ? "red" : "black"};
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0 1rem;

`;

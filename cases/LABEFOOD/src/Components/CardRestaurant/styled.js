import { CardMedia } from "@mui/material";
import styled from "styled-components";

export const ContainerCardRestaurant = styled.div`
  width: 100%;
  border: solid 0.2px #b8b8b8;
  border-radius: 0.8rem 0.8rem 0.3rem 0.3rem;
  margin: 0.5rem 0;
`;
export const ImageRestaurant = styled(CardMedia)`
  border-radius: 0.8rem 0.8rem 0 0;
  width: 100%;
  height: 7.5rem;
`;
export const NameRestaurant = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  color: #E8222E;
`;
export const BoxInformTimePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InformTimePrice = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: gray;
`;

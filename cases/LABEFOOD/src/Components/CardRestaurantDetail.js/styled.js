import { CardMedia } from "@mui/material";
import styled from "styled-components";

export const ContainerCardRestaurant = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border: none;
`;
export const ImageRestaurant = styled(CardMedia)`
  border-radius: 0.8rem 0.8rem 0 0;
  width: 100%;
  height: 7.5rem;
  margin-bottom: 0.600rem;
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
  margin-bottom: 0.625rem;
`;
export const BoxInform = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Inform = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: gray;
  margin-bottom: 0.600rem;
`;

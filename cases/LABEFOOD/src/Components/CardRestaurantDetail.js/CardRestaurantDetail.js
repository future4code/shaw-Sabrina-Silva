import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  BoxInform,
  Inform,
  ContainerCardRestaurant,
  ImageRestaurant,
  NameRestaurant,
} from "./styled";

const CardRestaurantDetail = ({ restaurant }) => {
  const navigate = useNavigate()
  console.log(restaurant.name);
  return (
    <>

    <ContainerCardRestaurant>
      <CardActionArea>
        <ImageRestaurant
          component="img"
          alt="logo da loja"
          height="140"
          image={restaurant.logoUrl}
          title="Nome da loja"
        />
      </CardActionArea>
      <NameRestaurant>{restaurant.name}</NameRestaurant>
      <Inform>{restaurant.category}</Inform>
      <BoxInform>
        <Inform>{restaurant.deliveryTime} min</Inform>
        <Inform>Frete {restaurant.shipping},00</Inform>
      </BoxInform>
      <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurant>
    </>
  );
};

export default CardRestaurantDetail;
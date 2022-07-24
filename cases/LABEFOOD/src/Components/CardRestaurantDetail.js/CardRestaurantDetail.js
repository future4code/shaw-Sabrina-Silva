import { CardActionArea } from "@mui/material";
import {
  BoxInform,
  Inform,
  ContainerCardRestaurant,
  ImageRestaurant,
  NameRestaurant,
} from "./styled";

const CardRestaurantDetail = ({ restaurant }) => {  
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
        <Inform>{restaurant.deliveryTime} - {restaurant.deliveryTime + 10}min</Inform>
        <Inform>Frete {restaurant.shipping},00</Inform>
      </BoxInform>
      <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurant>
    </>
  );
};

export default CardRestaurantDetail;

import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToRestaurantDetail } from "../../Router/coordinator";
import {
  BoxInformTimePrice,
  InformTimePrice,
  ContainerCardRestaurant,
  ImageRestaurant,
  NameRestaurant,
} from "./styled";

const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate()

  return (
    <ContainerCardRestaurant onClick={()=> goToRestaurantDetail(navigate, restaurant.id)}>
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
      <BoxInformTimePrice>
        <InformTimePrice>{restaurant.deliveryTime} - {restaurant.deliveryTime + 10}min</InformTimePrice>
        <InformTimePrice>Frete {restaurant.shipping},00</InformTimePrice>
      </BoxInformTimePrice>
    </ContainerCardRestaurant>
  );
};

export default CardRestaurant;

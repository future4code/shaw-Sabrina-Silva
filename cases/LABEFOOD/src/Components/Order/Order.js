import React from "react";
import { ContainerOrder, ContainerInfo, ContainerIcon } from "./styled";
import { AccessTime } from "@mui/icons-material";
import { useGlobal } from "../../Context/Global/GlobalStateContext";

const Order = ({activeOrder}) => {
  
  const { states, setters } = useGlobal();
  const { order, cart } = states;
  const { setOrder } = setters;

  console.log(order, cart)
  return (
    <ContainerOrder>
      <ContainerIcon>
        <AccessTime fontSize="large" />
      </ContainerIcon>
      <ContainerInfo>
      <h4>Pedido em andamento</h4>
      <p>{activeOrder.restaurantName}</p>
      <p>SUBTOTAL R${activeOrder.totalPrice.toFixed(2)}</p>
      </ContainerInfo>
    </ContainerOrder>
  );
};

export default Order;

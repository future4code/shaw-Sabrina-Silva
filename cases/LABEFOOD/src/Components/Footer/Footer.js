import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import avatarW from "../../Assets/ImgFooter/avatar-grey.png";
import avatar from "../../Assets/ImgFooter/avatar-red.png";
import homepageW from "../../Assets/ImgFooter/homepage-grey.png";
import homepage from "../../Assets/ImgFooter/homepage-red.png";
import shoppingW from "../../Assets/ImgFooter/shopping-cart-grey.png";
import shopping from "../../Assets/ImgFooter/shopping-cart-red.png";
import { goToCart, goToFeed, goToProfile } from "../../Router/coordinator";
import { ContainerFooter, ImageFooter } from "./styled";

const Footer = (props) => {
  const navigate = useNavigate()

  return (
    <ContainerFooter>
      <IconButton title={"Página Principal"} onClick={() => goToFeed(navigate)} aria-label='home'>
        <ImageFooter src={props.page === 'home' ? homepage : homepageW} alt={"imagem de casa, representando a página principal"} />
      </IconButton>

      <IconButton title={"Carrinho"} onClick={() => goToCart(navigate)} aria-label="cart">
        <ImageFooter src={props.page === 'cart' ? shopping : shoppingW} alt={"imagem ilustrativa do carrinho de compras"} />
      </IconButton>

      <IconButton title={"Perfil"} onClick={() => goToProfile(navigate)} aria-label="profile">
        <ImageFooter src={props.page === 'profile' ? avatar : avatarW} alt={"Imagem ilustrativa representando o perfil"} />
      </IconButton>
    </ContainerFooter>
  );
};

export default Footer
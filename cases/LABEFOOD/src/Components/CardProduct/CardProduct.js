import { useState } from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  BoxInformButtonPrice,
  BoxNameQuantity,
  ContainerCardProducts,
  ImageProducts,
  InformAddItenButton,
  InformRemoveItenButton,
  InformDescription,
  InformPrice,
  NameProduct,
  QuantityProduct,
} from "./styled";

const CardProduct = ({ product, restaurant }) => {
  const [showModal, setShowModal] = useState(false);

  const { states, requests, setters } = useGlobal();
  const { addItemToCart, removeItemToCart } = requests;
  const { cart } = states

  const choiceQuantity = (quantity) => {
    addItemToCart(product, quantity, restaurant);
    setShowModal(false)
  };

  const productInCart = cart.find((productInCart)=> (productInCart.id === product.id))

  return (
    <ContainerCardProducts>
      <ImageProducts src={product.photoUrl} />
      <BoxInform>
        <BoxNameQuantity>
          <NameProduct>{product.name}</NameProduct>
          { productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
        </BoxNameQuantity>
        <InformDescription>{product.description}</InformDescription>
        <BoxInformButtonPrice>
          <InformPrice>R$ {product.price}</InformPrice>
          {
          productInCart 
          ? 
          <InformRemoveItenButton onClick={() => removeItemToCart(product.id)}>
            remover
          </InformRemoveItenButton> 
          : 
          <InformAddItenButton onClick={() => setShowModal(true)}>
            adicionar
          </InformAddItenButton>
          }
        </BoxInformButtonPrice>
        <ModalSelectQuantity
          choiceQuantity={choiceQuantity}
          open={showModal}
          setOpen={setShowModal}
          product={product}
        />
      </BoxInform>
    </ContainerCardProducts>
  );
};

export default CardProduct;

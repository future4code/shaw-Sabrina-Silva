import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BoxModal, ButtonAddToCart, SelectQuantity, TitleModal } from './styled';

 const ModalSelectQuantity = ({open, setOpen, choiceQuantity}) => {
  const [quantity, setQuantity] = React.useState()

  // const choiceQuantity = (quantity) => {
  //   console.log(quantity)
  //   if(quantity === 0){
  //       setShowModal(false)
  //       removeItemToCart(product.id)
  //   }else{
  //   }
    
  // };


  return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
          <BoxModal >
            <TitleModal>
                Selecione a quantidade desejada
            </TitleModal>
            <SelectQuantity onChange={(event)=>setQuantity(event.target.value) }>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </SelectQuantity>
            <ButtonAddToCart onClick={()=> choiceQuantity(Number(quantity))}>
            Adicionar ao carrinho
            </ButtonAddToCart>
           
          </BoxModal>
     </Modal>
  );
}

export default ModalSelectQuantity
import { useState } from "react"
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity"
import { BoxInform, BoxInformButtonPrice, BoxNameQuantity, ContainerCardProducts, ImageProducts, InformButton, InformDescription, InformPrice, NameProduct } from "./styled"

const CardProduct = ({product}) =>{
const [showModal, setShowModal] = useState(false)

    return(
        <ContainerCardProducts>
            <ImageProducts src={product.photoUrl}/>
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product.name}</NameProduct>
                </BoxNameQuantity>
                <InformDescription>
                    {product.description}
                </InformDescription>
                <BoxInformButtonPrice>
                    <InformPrice>
                       {product.price}0
                    </InformPrice>
                    <InformButton onClick={() => setShowModal(true)}>
                    adicionar
                </InformButton>
                </BoxInformButtonPrice>
                <ModalSelectQuantity 
                open = {showModal}
                setOpen = {setShowModal}
                />
            </BoxInform>
        </ContainerCardProducts>
    )
}

export default CardProduct
import styled from "styled-components";

export const ContainerCardProducts = styled.div`
width: 100%;
margin: 0.5rem 0;
display: flex;
border: solid 1px gray;
border-radius: 9px;
`
export const ImageProducts = styled.img`
width: 6rem;
height: 7rem;
border-radius: 9px 0 0 9px  ;
`
export const QuantityProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 2.063rem;
height: 2.063rem;
border: solid 1px #E8222E;
border-radius: 0 8px 0 8px ;
color: #E8222E;
`

export const  BoxNameQuantity = styled.div`
display: flex;
justify-content: space-between;
`

export const NameProduct = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  color:#E8222E;
  margin: 16px 16px 5px 4.8px;
` 


export const BoxInform = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 0 0 1rem;
  flex-grow: 1;
`

export const InformDescription = styled.p`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  color: grey;
  padding: 0.25rem;
    flex-grow: 1;
`

export const BoxInformButtonPrice = styled.div`
display: flex;
justify-content: space-between;
`

export const InformPrice = styled.p` 
  font-size: 1.1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  padding: 0.25rem;
  flex-grow: 1;
`

export const InformAddItenButton = styled.button` 
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: #fff;
outline: 0;
border: solid 1px black;
font-weight: 600;
`

export const InformRemoveItenButton = styled(InformAddItenButton)` 
border: solid 1px #E8222E;
color: #E8222E;
`

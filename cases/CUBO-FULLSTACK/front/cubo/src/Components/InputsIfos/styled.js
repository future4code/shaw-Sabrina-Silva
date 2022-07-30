import styled from "styled-components";

export const ContainerInput = styled.div`
width: 100%;
height: 10vh;
border-left: none;
border-right:none;
border-top: none;
border: 1px solid #663399;
@media(max-width: 800px) {
    height:auto;
  }
`

export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 1.5rem;
@media(max-width: 800px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
border: 0.13rem solid #9370DB;
width: 20%;
height: 2.5rem;
border-radius: 0.5rem;
padding: 1px;
font-size: 1rem;
font-weight: 500;
@media(max-width: 800px) {
    width: 70%;
    margin-bottom: 1rem;
  }
`

export const SendButton = styled.button`
border: solid 2px #fff;
color: #fff;
width: 12vw;
height: 2.6rem;
background-color: #663399;
border-radius: 0.5rem;
font-size: 17px;
transition: 1s;
cursor: pointer;
:hover{
    background-color:#9370DB;
}

@media(max-width: 800px) {
    width: 50%;
  }
`

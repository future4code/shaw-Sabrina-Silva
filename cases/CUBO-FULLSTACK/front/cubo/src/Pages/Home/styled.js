import styled from "styled-components";

export const ContainerHome = styled.div`
width: 100%;
height: 100%;
`

export const BodyHome = styled.body`
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: #9370DB;
height: 90vh;

@media(max-width: 800px) {

    flex-direction: column;
    position: relative;
    height: auto;
  }

/* @media (min-width: 500px) {
    display: flex;
flex-direction: column;
  } */
  /* @media (min-width: 600px) {
    display: flex;
flex-direction: column;
  } */
  /* @media (min-width: 700px) {
    margin-left: 18vw;
    margin-right: 18vw;
  }
  @media (min-width: 1000px) {
    margin-left: 30vw;
    margin-right: 30vw;
  } */
`

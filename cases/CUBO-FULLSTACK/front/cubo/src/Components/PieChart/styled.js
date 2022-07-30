import styled from "styled-components";

export const ContainerPieChart = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50vw;
height: 60vh;
margin: 5.5rem;

@media(max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  right: 5.5rem;
  top: auto;
  width: 25rem;
  }
 
`


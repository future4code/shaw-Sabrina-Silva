import styled from "styled-components"

export const ContainerHeader = styled.div`
    width:100%;
    border: 1px solid black;
    height: 3rem;
    display: grid;
    grid-template-columns: 24px 1fr 24px;
    border-color: #b8b8b8;
    justify-items: center;
    align-items: center;
    padding: 0 1rem ;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`
export const Title = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  grid-column-start: 2;
`
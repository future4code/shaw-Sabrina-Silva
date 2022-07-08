import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 3rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border: none;
h2 {
    color:  #1e90ff
}
`

export const ButtonSuasPlaylists = styled.button`

  border-radius: 4rem;
  border-color: #1e90ff;
  color: #1e90ff;
  background-color: #fff;
  width: 8rem;
  height: 2rem;
  cursor: pointer;
  
  :hover {
    cursor: pointer;
    color: #1e90ff;
    background-color: #E0FFFF;
  }
`
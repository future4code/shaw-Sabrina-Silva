import styled from "styled-components";

export const ContainerCriaPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-bottom: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h2 {
    padding-top: 4rem;
    font-size: 2.5rem;
    color: #1e90ff;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: black;

    h2 {
      padding-top: 4rem;
      font-size: 2rem;
      color: #1e90ff;
    }
  }
`;

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 25rem;
  height: 2rem;
  color: #fff;
  border-color: #1e90ff;
  background-color: black;
  font-size: 1.1rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 13rem;
    
  }
`;
export const ButtonCriar = styled.button`
  margin-top: 4rem;
  border-radius: 4rem;
  border-color: #1e90ff;
  color: #1e90ff;
  width: 5rem;
  height: 2rem;
  background-color: black;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: #1e90ff;
    background-color: #fff;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
 
  }
`;

export const ButtonDetalhesPlaylist = styled.button`
  margin-top: 1rem;
  border-radius: 4rem;
  border-color: #1e90ff;
  color: #1e90ff;
  background-color: black;
  width: 8rem;
  height: 2.5rem;
  font-size: 0.98rem;
  cursor: pointer;
  
  :hover {
    cursor: pointer;
    color: #1e90ff;
    background-color: #fff;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
   
  }
`;

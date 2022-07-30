import styled from "styled-components";

export const TableContainer = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;

  tr:nth-child(even) {
    background-color: rgb(228, 228, 228);
  }

  @media(max-width: 800px) {
    width: 70%;
    margin-left: 4rem;

  }
`;
export const Caption = styled.caption`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 20px;
  color: #4B0082;
  font-size: 20px;

`;

export const DescripitionTh = styled.th`
  border: 1.5px solid #4B0082;
  border-radius: 0.5rem;
  padding: 10px;
  width: 20%;
  color: #fff;
  font-size: 17.5px;
  background-color: #9370DB;

`;

export const NameTd = styled.td`
  border: 1.5px solid #4B0082;
  border-radius: 0.5rem;
  padding: 10px;
  width: 30%;
  font-weight: 600;
  color: #4B0082;

  @media(max-width: 800px) {
    width: 50%;
  }
`;

export const ParticipationTd = styled.td`
  border: 1px solid #4B0082;
  border-radius: 0.5rem;
  padding: 10px;
  width: 30%;
  font-weight: 500;

  @media(max-width: 800px) {
    width: 50%;
  }
`;

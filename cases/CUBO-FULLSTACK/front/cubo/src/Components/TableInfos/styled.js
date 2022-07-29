import styled from "styled-components";

export const TableContainer = styled.div`
  width: 40%;
  height: auto;
  margin: 5rem;

  tr:nth-child(even) {
    background-color: rgb(228, 228, 228);
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
`;

export const ParticipationTd = styled.td`
  border: 1px solid #4B0082;
  border-radius: 0.5rem;
  padding: 10px;
  width: 30%;
  font-weight: 500;
`;

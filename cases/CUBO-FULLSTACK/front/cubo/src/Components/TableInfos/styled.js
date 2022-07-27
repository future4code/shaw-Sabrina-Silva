import styled from "styled-components";

export const TableContainer = styled.div`
width: 50%;
height: auto;
margin: 5rem;

table{
    border-collapse: collapse;
    border: 1px solid black;
};

tr:nth-child(even){
    background-color: rgb(228,228,228);
};
`
export const Caption = styled.caption`
 font-size: 1.2rem;
    font-weight: bold;
    padding: 20px;
    color: #663399;
`

export const DescripitionTh = styled.th`
border: 1px solid black;
border-radius: 0.5rem;
padding:10px;
width: 20%;
color: #663399;
`

export const NameTd = styled.td`
border: 1px solid black;
border-radius: 0.5rem;
padding:10px;
width: 20%;
`

export const ParticipationTd = styled.td`
border: 1px solid black;
border-radius: 0.5rem;
padding:10px;
width: 20%;
`

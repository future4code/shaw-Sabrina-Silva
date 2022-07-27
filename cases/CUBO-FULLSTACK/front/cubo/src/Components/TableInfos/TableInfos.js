import * as React from 'react';
import { TableContainer, DescripitionTh, NameTd, ParticipationTd, Caption } from './styled';

const rows = [
    {
        name:'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
    },
    {
        name:'Ice cream sandwich',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
    },
    {
        name:'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0
    }
];

const TableInfos = () => {
  return (
    <TableContainer>
    <table>
        <Caption>Participantes</Caption>
      <thead>
        <DescripitionTh>Nome</DescripitionTh>
        <DescripitionTh>Participação</DescripitionTh>
      </thead>
      <tbody>
        
        <tr>
        <NameTd>Luana</NameTd>
        <ParticipationTd>50</ParticipationTd>
        </tr>
      </tbody>
      <tr>
        <NameTd>Maria</NameTd>
        <ParticipationTd>50</ParticipationTd>
        </tr>
        <tr>
        <NameTd>Camila</NameTd>
        <ParticipationTd>50</ParticipationTd>
        </tr>
        <tr>
        <NameTd>João</NameTd>
        <ParticipationTd>50</ParticipationTd>
        </tr>
        <tr>
        <NameTd>Pedro</NameTd>
        <ParticipationTd>20</ParticipationTd>
        </tr>
        <tr>
        <NameTd>Lilian</NameTd>
        <ParticipationTd>20</ParticipationTd>
        </tr>
    </table>
    </TableContainer>
  );
}
export default TableInfos
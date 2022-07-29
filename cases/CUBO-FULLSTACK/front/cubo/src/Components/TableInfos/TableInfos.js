import { FadeInLeft } from "animate-css-styled-components";
import Animate from "animate-css-styled-components/lib/Animate";
import * as React from "react";
import {
  TableContainer,
  DescripitionTh,
  NameTd,
  ParticipationTd,
  Caption,
} from "./styled";

const TableInfos = ({ user }) => {
  const userTable = user.map((user) => {
    return (
      <tr>
        <NameTd>
          {user.first_name} {user.second_name}
        </NameTd>
        <ParticipationTd>{user.participation}%</ParticipationTd>
      </tr>
    );
  });

  return (
    <TableContainer>
      {user ? 
       <Animate 
       Animation={[FadeInLeft]} 
       duration="0.8s" 
       delay="0.2s">
      <table>
        <Caption>Participantes</Caption>
        <thead>
          <DescripitionTh>Nome</DescripitionTh>
          <DescripitionTh>Participação</DescripitionTh>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
      </Animate> : <></>}
    
    </TableContainer>
  );
};
export default TableInfos;

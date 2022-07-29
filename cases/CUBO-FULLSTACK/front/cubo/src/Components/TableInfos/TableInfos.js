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
      <table>
        <Caption>Participantes</Caption>
        <thead>
          <DescripitionTh>Nome</DescripitionTh>
          <DescripitionTh>Participação</DescripitionTh>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </TableContainer>
  );
};
export default TableInfos;

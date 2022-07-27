// import axios from "axios";
import React from "react";
import InputsInfos from "../../Components/InputsIfos/InputsInfos";
import PieChartGraphic from "../../Components/PieChart/PieChart";
import TableInfos from "../../Components/TableInfos/TableInfos";
import { BodyHome, ContainerHome } from "./styled";
// import BASE_URL from "../../Constants/url";

const Home = () => {
  return (
    <ContainerHome>
      <InputsInfos />
      <BodyHome>
        <TableInfos />
        <PieChartGraphic />
      </BodyHome>
    </ContainerHome>
  );
};

export default Home;

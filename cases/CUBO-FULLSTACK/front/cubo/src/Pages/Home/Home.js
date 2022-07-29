import axios from "axios";
import React, { useEffect, useState } from "react";
import InputsInfos from "../../Components/InputsIfos/InputsInfos";
import PieChartGraphic from "../../Components/PieChart/PieChart";
import TableInfos from "../../Components/TableInfos/TableInfos";
import { BodyHome, ContainerHome } from "./styled";
import BASE_URL from "../../Constants/url";

const Home = () => {
  const [user, setUser] = useState([])

  const getUser = async () => {
    await axios
    .get(`${BASE_URL}/get-users`, {
      headers: {
        auth: localStorage.getItem("token"),
      }
    })
    .then((res)=> {
        setUser(res.data.result)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  const userPierChart = user.map((user) => {
    return user.first_name
  });

  

  useEffect(() => {
    getUser()
    }, []);

  return (
    <ContainerHome>
      <InputsInfos/>
      <BodyHome>
        <TableInfos user={user} />
        <PieChartGraphic user={user} name={userPierChart}/>
      </BodyHome>
    </ContainerHome>
  );
};

export default Home;

import React from "react";
import { ContainerPieChart } from "./styled";
import { VictoryPie, VictoryScatter, VictoryLabel } from "victory";

const PieChartGraphic = ({name, user}) => {

  const color = ()=>{
   return ("#" +
    Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0"))
  }
  console.log(user)
    
  const pieUsers = user.map( (user) => {
    const name = `${user.first_name} - ${user.participation}%`; 
    const dataPoint = {x:name, y:user.participation, label: name}
    return dataPoint
  })

  return (
    <ContainerPieChart>
      <VictoryPie
        data={pieUsers}
        width={500}
        labelPlacement={"vertical"}
        colorScale={Array.from({length: pieUsers.length},()=> color())}
        style={{
          data: {
            fillOpacity: 0.9,
          },
          labels: {
            fontSize: 16,
            fill: "#663399",
          },
        }}
      />
      {/* {userPierChart} */}
    </ContainerPieChart>
  );
};

export default PieChartGraphic;

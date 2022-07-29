import React from "react";
import { ContainerPieChart } from "./styled";
import { VictoryPie } from "victory";
import { FadeInRight } from "animate-css-styled-components";

const PieChartGraphic = ({name, user}) => {

  const color = ()=>{
   return ("#" +
    Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0"))
  }
    
  const pieUsers = user.map( (user) => {
    const name = `${user.first_name}-${user.participation}%`; 
    const dataPoint = {x:name, y:user.participation, label: name}
    return dataPoint
  })

  return (
    <ContainerPieChart>
      {user ? <FadeInRight>
      <VictoryPie
        data={pieUsers}
        width={500}
        height={500}
        labelPlacement={"parallel"}
        labelRadius={({ innerRadius }) => innerRadius + 5 }
        // colorScale={Array.from({length: pieUsers.length},()=> color())}
        colorScale={"qualitative"}
        innerRadius={60}
        style={{
          data: {
            fillOpacity: 0.9,
          },
          labels: {
            fontSize: 14,
            fill: "#fff",
          },
        }}
      />
      </FadeInRight> : <></> }
      {/* <BounceIn>
      <VictoryPie
        data={pieUsers}
        width={500}
        labelPlacement={"parallel"}
        labelRadius={({ innerRadius }) => innerRadius + 5 }
        colorScale={Array.from({length: pieUsers.length},()=> color())}
        innerRadius={50}
        style={{
          data: {
            fillOpacity: 0.9,
          },
          labels: {
            fontSize: 14,
            fill: "#fff",
          },
        }}
      />
      </BounceIn> */}
    </ContainerPieChart>
  );
};

export default PieChartGraphic;

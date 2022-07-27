import React from "react";
import { ContainerPieChart } from "./styled";
import { VictoryPie, VictoryScatter, VictoryLabel } from "victory";

const PieChartGraphic = () => {
  
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 5, earnings: 18560 },
    { quarter: 6, earnings: 11200 },
    { quarter: 7, earnings: 12560 },
  ];  

  const color = ()=>{
   return ("#" +
    Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0"))
  }
    
  return (
    <ContainerPieChart>
      <VictoryPie
        data={data}
        x="quarter"
        y="earnings"
        width={500}
        colorScale={Array.from({length: data.length},()=> color())}
        style={{
          data: {
            fillOpacity: 0.9,
          },
          labels: {
            fontSize: 15,
            fill: "black",
          },
        }}
      />
    </ContainerPieChart>
  );
};

export default PieChartGraphic;

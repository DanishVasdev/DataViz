import React from 'react';
  import { scaleBand, scaleLinear, max } from 'd3';

 
  const width = 960;
  const height = 500;
  const margins={top:50,bottom:50,left:100,right:50};
export const Bar= (data)=>{
    const yScale = scaleBand()
     .domain(data.data.map((d) => d.day))
     .range([0, height]);
 
   const xScale = scaleLinear()
     .domain([0, max(data.data, (d) => d.temp)])
     .range([0, width]);
    
   return (
      <svg width={width} height={height} transform={`translate(${margins.left},${margins.top})`}>
       {data.data.map((d) => (
         <rect
           key={d.day}
           y={yScale(d.day)}
           width={xScale(d.temp)}
           height={yScale.bandwidth()}
         />
       ))}
     </svg>
   );

}
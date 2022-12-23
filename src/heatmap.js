import React from 'react';
import {scaleLinear,scaleBand, axisBottom} from 'd3';

const height=420;
const width=470;
const margins={top:50,bottom:50,left:100,right:50};
export const Heat_Map=(data)=>
{
    const yScale = scaleBand()
    .domain(data.data.map((d) => d.price_range))
    .range([0, height-100])

    const xScale = scaleBand()
    .domain(data.data.map((d) => d.prediction))
    .range([50,width-100])

    const Color = scaleLinear()
    .range(["white", "blue"])
    .domain([1,50]);
    
  return (
    <g>
    <svg width={width} height={height} transform={`translate(${margins.left},${margins.top})` } align='center'>
        
      {data.data.map((d) => (
        <g>
         <rect
           key={d.index}
           y={yScale(d.price_range)}
           x={xScale(d.prediction)}
           height={80}
           width={80}
           fill={Color(d.matching)}
         >
        </rect>
        <text 
        key={d.index}
        y={yScale(d.price_range)+40}
        x={xScale(d.prediction)+40}>{d.matching}</text>
        <text
        key={d.index}
        y={30}
        x={-yScale(d.price_range)-40}
        transform={'rotate(270)'}>{d.price_range}</text>
        <text
        key={d.index}
        y={330}
        x={xScale(d.prediction)+40}
        >{d.prediction}</text>
        </g>
       ))}
       <text x={-200} y={10} transform={'rotate(270)'}>Real Values</text>
       <text x={150} y={350}>Predicted Values</text>
    </svg>
    </g>
  );
}


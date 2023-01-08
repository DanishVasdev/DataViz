import React from 'react';
import {scaleLinear,scaleBand, axisBottom} from 'd3';

const height=280;
const width=285;
const margins={top:0,bottom:0,left:0,right:0};
export const Heat_Map=(data)=>
{
    const yScale = scaleBand()
    .domain(data.data.map((d) => d.price_range))
    .range([0, height-30])

    const xScale = scaleBand()
    .domain(data.data.map((d) => d.prediction))
    .range([30,width-5])

    const Color = scaleLinear()
    .range(["white", "blue"])
    .domain([1,50]);
    
  return (
    <g>
    <svg width={width} height={height} transform={`translate(${0},${-270})` } align='center'>
      {data.data.map((d) => (
        <g>
         <rect
           key={d.index}
           y={yScale(d.price_range)}
           x={xScale(d.prediction)}
           height={63}
           width={63}
           fill={Color(d.matching)}
           stroke={'black'}
         >
        </rect>
        <text 
        key={d.index}
        y={yScale(d.price_range)+30}
        x={xScale(d.prediction)+30}>{d.matching}</text>
        <text
        key={d.index}
        y={23}
        x={-yScale(d.price_range)-40}
        transform={'rotate(270)'}>{d.price_range}</text>
        <text
        key={d.index}
        y={263}
        x={xScale(d.prediction)+30}
        >{d.prediction}</text>
        </g>
       ))}
       <text x={-170} y={10} transform={'rotate(270)'}>Real Values</text>
       <text x={100} y={275}>Predicted Values</text>
    </svg>
    
    </g>
  );
}


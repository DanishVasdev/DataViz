import React from 'react';
import {scaleLinear,max} from 'd3';

const height=400;
const width=400;
const margins={top:50,bottom:50,left:100,right:50};
export const Line_chart=(data)=>
{
    const yScale = scaleLinear()
    .domain([0, max(data.data, (d) => d.loss)])
    .range([0, height-30]);

    const xScale = scaleLinear()
    .domain([0, max(data.data, (d) => d.epoch)])
    .range([0,width-30])

  return (
    <g>
     <svg width={width} height={height} transform={`translate(${margins.left},${margins.top})`} align='center' >
      <g transform={`translate(10,10)`}>
        {xScale.ticks().map((ticks)=>(
          <g key={ticks} transform={`translate(${xScale(ticks)+10},0)`}>
          <text
          style={{ textAnchor: 'middle' }}
              dy=".71em"
              y={height-30}>{ticks}</text>
        </g>
        ))
        }
        {yScale.ticks().map((ticks)=>(
          <g key={ticks} transform={`translate(-5,${yScale(ticks)+36})`}>
          <text
          style={{ textAnchor: 'middle' }}
              dx=".71em"
              x={5}>{40-ticks}</text>
        </g>
        ))
        }
        <g id="graph" transform={`translate(20,20)`} >
        {data.data.map((d)=>(
          <g>
           <circle
           key={d.epoch}
            cx={xScale(d.epoch)}
            cy={height-50-yScale(d.loss)}
            r={5}
            opacity={0}>
              <title>{d.loss}</title>
           </circle>
           <circle
           key={d.epoch}
            cx={xScale(d.epoch)}
            cy={height-50-yScale(d.loss)}
            r={2}>
           </circle>
           </g>
         ))
         }
         <polyline
         fill='none'
         stroke='blue'
           points={data.data.map((d)=>(`${xScale(d.epoch)},${height-50-yScale(d.loss)}`))}></polyline>
      </g>
      </g>
      <text x={-200} y={10} transform={'rotate(270)'}>Loss</text>
      <text x={150} y={400}>Epochs</text>
    </svg>
    </g>
  );
}


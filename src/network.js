import React, { useState } from 'react';
import Slider from 'react-input-slider';
import ToggleButton from 'react-toggle-button';
  import {max, scaleBand, scaleLinear} from 'd3';

 
  const width = 960;
  const height = 500;
  const margins={top:50,bottom:50,left:100,right:50};
export const Network= (data)=>{
    const [epoch,setEpoch]=useState({value:0})
    const [node,setNode]=useState({value:-1})
    const [select,setSelect]=useState({selection:0})
    const xScale = scaleBand()
     .domain(data.data.map((d) => d.layer))
     .range([margins.left, width-margins.right]);
    const yScale= scaleBand()
     .domain(data.data.map((d) => d.node))
     .range([margins.top,height-margins.bottom]);
    const biasScale= scaleLinear()
    .domain([0, max(data.data.map((d)=>d.bias))])
    .range([0,100])
    const weightScale= scaleLinear()
    .domain([0, max(data.data.map((d)=>d.weight))])
    .range([0,10])

   return (
    <g>
      <svg width={width} height={height} transform={`translate(${margins.left},${margins.top})`}>
        {data.data.filter(d=>((d.epoch===epoch.value)&&((d.node===node.value)||(node.value===-1)))).map((d) => (
          <g>
            <circle
            key={`${d.layer}_${d.node}`}
            cx={xScale(d.layer)}
            cy={yScale(d.node)}
            r={10}
            stroke='black'
            fill='none'
            ></circle>
            <circle
            key={`${d.layer}_${d.node}`}
            cx={xScale(d.layer)}
            cy={yScale(d.node)}
            r={10}
            stroke='black'
            fill='red'
            opacity={biasScale(-d.bias)}
            >
            </circle>
            <circle
            key={`${d.layer}_${d.node}`}
            cx={xScale(d.layer)}
            cy={yScale(d.node)}
            r={10}
            stroke='black'
            fill='blue'
            opacity={biasScale(d.bias)}></circle>
            <line 
            key={`${d.layer}_${d.node}_${d.target}`}
            x1={xScale(d.layer)}
            x2={xScale(d.layer+1)}
            y1={yScale(d.node)}
            y2={yScale(d.target)}
            fill='blue'
            stroke='blue'
            opacity={weightScale(d.weight)**5}></line>
            <line 
            key={`${d.layer}_${d.node}_${d.target}`}
            x1={xScale(d.layer)}
            x2={xScale(d.layer+1)}
            y1={yScale(d.node)}
            y2={yScale(d.target)}
            fill='red'
            stroke='red'
            opacity={weightScale(-d.weight)**5}></line>
            
            
          </g>
       ))}
       
     </svg>


     <Slider
    axis="x"
    xstep={1}
    xmin={0}
    xmax={9}
    x={epoch.value}
    onChange={( state ) =>setEpoch({value:state.x})}
  />
    
  </g>
      
   );

}
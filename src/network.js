import React, { useState } from 'react';
  import {max, rgb, scaleBand, scaleLinear} from 'd3';
  import Tooltip from "@material-ui/core/Tooltip";
 import { Info } from './info_box';
  const width = 500;
  const height = 500;
  const margins={top:50,bottom:50,left:50,right:0};

export const Network= (props)=>{
    const data=props.props.data
    const epoch=props.props.epoch
    const [node,setNode]=useState({value:-1})
    const [layer,setLayer]=useState({value:-1})
    const xScale = scaleBand()
     .domain(data.map((d) => d.layer))
     .range([margins.left, width-margins.right]);
    const yScale= scaleBand()
     .domain(data.map((d) => d.node))
     .range([margins.top,height-margins.bottom]);
    const biasScale= scaleLinear()
    .domain([0, max(data.map((d)=>d.bias))])
    .range(["white","blue"])
    const biasScale2= scaleLinear()
    .domain([0, max(data.map((d)=>d.bias))])
    .range(["white","red"])
    const weightScale= scaleLinear()
    .domain([0, max(data.map((d)=>d.weight))])
    .range(['white','blue'])
    const weightScale3= scaleLinear()
    .domain([0, max(data.map((d)=>d.weight))])
    .range([0.2,1])
    const weightScale2= scaleLinear()
    .domain([0, max(data.map((d)=>d.weight))])
    .range(['white','red'])
    function decide_color(bias){
      if(bias<0){
        return biasScale2(-bias);
      }
      else{
        return biasScale(bias);
      }
    }
    function decide_color2(weight){
      if(weight<0){
        return weightScale2(-weight);
      }
      else{
        return weightScale(weight);
      }
    }
    function addWeight(d){
      if(d.weight===0){
        return;
      }
      else{
        return(
        <g>
        <Tooltip title={`weight: ${d.weight}`}>
        <g>
        <line 
        key={`${d.layer}_${d.node}_${d.target}`}
        x1={xScale(d.layer)}
        x2={xScale(d.layer+1)}
        y1={yScale(d.node)}
        y2={yScale(d.target)}
        fill={decide_color2(d.weight)}
        stroke={decide_color2(d.weight)}
        strokeOpacity={weightScale3(d.weight)}></line>
        <line 
        key={`${d.layer}_${d.node}_${d.target}`}
        x1={xScale(d.layer)}
        x2={xScale(d.layer+1)}
        y1={yScale(d.node)}
        y2={yScale(d.target)}
        fill={decide_color2(d.weight)}
        stroke={decide_color2(d.weight)}
        strokeOpacity={weightScale3(-d.weight)}></line>
        </g>
        </Tooltip>
        </g>);
      }
    }
   return (
    <g>
      <svg width={width} height={height} transform={`translate(${0},${margins.top})`}>
        {data.filter(d=>((d.epoch===epoch)&&((d.node===node.value)||(node.value===-1)))).map((d) => (
          <g onMouseEnter={()=>{
            setLayer({value:d.layer})
          }}
          onMouseLeave={()=>{
            setLayer({value:-1})
          }}>
            <circle
            key={`${d.layer}_${d.node}`}
            cx={xScale(d.layer)}
            cy={yScale(d.node)}
            r={10}
            stroke='black'
            fill='none'
            ></circle>
            
            <Tooltip title={`bias: ${d.bias}`}>
            <circle
            key={`${d.layer}_${d.node}`}
            cx={xScale(d.layer)}
            cy={yScale(d.node)}
            r={10}
            stroke='black'
            fill={decide_color(d.bias)}
            ></circle></Tooltip>
            {addWeight(d)}
          </g>
       ))}
      <Info layer={layer.value}></Info>
     </svg>
     </g>
   );

}
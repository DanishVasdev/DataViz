import React, { useState } from 'react';
import Slider from 'react-input-slider';
import { scaleLinear} from 'd3';
import { gravity } from './gravitation';
 
  const width = 460;
  const height = 400;
  const margins={top:100,bottom:100,left:150,right:110};
export const Planet= (data)=>{
    const [epoch,setEpoch]=useState({value:0})
    const xScale = scaleLinear()
     .domain([-1,1])
     .range([margins.left, width-margins.right]);
    const yScale= scaleLinear()
     .domain([-1,1])
     .range([margins.top,height-margins.bottom]);
    
    function colorScale(p){
        if(p===0){
            return 'green'
        }
        if(p===1){
            return 'blue'
        }
        if(p===2){
            return 'red'
        }
        if(p===3){
            return 'yellow'
        }
    }

   return (
    <g>
      <svg width={width} height={height} transform={`translate(${margins.left+150},${margins.top})`}>
        <g >
      <rect height={height}  width={width} >
      </rect>
      <circle
            cx={xScale(1)}
            cy={yScale(1)}
            stroke={'green'}
            r={10}></circle>
            <circle
            cx={xScale(-1)}
            cy={yScale(1)}
            stroke={'blue'}
            r={10}></circle>
            <circle
            cx={xScale(-1)}
            cy={yScale(-1)}
            stroke={'red'}
            r={10}></circle>
            <circle
            cx={xScale(1)}
            cy={yScale(-1)}
            stroke={'yellow'}
            r={10}></circle>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(1)}
          stroke={'white'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(-1)}
          stroke={'white'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(-1)}
          y2={yScale(-1)}
          stroke={'white'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(-1)}
          y2={yScale(1)}
          stroke={'white'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(1)}
          y1={yScale(-1)}
          y2={yScale(1)}
          stroke={'white'}></line>
          <line
          x1={xScale(-1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(-1)}
          stroke={'white'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(1)}
          stroke={'white'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(1)}
          stroke={'white'}></line>

        {data.data.filter(d=>((d.epoch===(10*epoch.value)))).map((d) => (
          <g>
            <circle 
            id="sample"
            key={d.index}
            cx={xScale(gravity(d.prob0,d.prob1,d.prob2,d.prob3)[0])}
            cy={yScale(gravity(d.prob0,d.prob1,d.prob2,d.prob3)[1])}
            fill={colorScale(d.price_range)}
            r={5}
            ></circle>
          </g>
       ))}
       </g> 
       <text font_color='white'>{epoch.value}</text>
     </svg>
     
    <div>
     <text>{epoch.value}</text>
     <Slider
    axis="x"
    xstep={1}
    xmin={0}
    xmax={9}
    x={epoch.value}
    onChange={( state ) =>setEpoch({value:state.x})}
    /> 
     </div>
  </g>
      
   );

}
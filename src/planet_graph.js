import React from 'react';
import { scaleLinear} from 'd3';
import { gravity } from './gravitation';
import Tooltip from "@material-ui/core/Tooltip";
 
  const width = 300;
  const height = 300;
  const margins={top:50,bottom:50,left:50,right:50};
export const Planet= (props)=>{
    const epoch=props.props.epoch
    const data=props.props.data
    console.log(epoch)
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
            return 'cyan'
        }
    }

   return (
      <svg width={width} height={height} transform={`translate(${-60},${-60})`}>
        <g >
      <Tooltip title={'price range 1'}>
      <circle
            cx={xScale(1)}
            cy={yScale(1)}
            stroke={'green'}
            fill={'white'}
            r={10}></circle></Tooltip>
            <Tooltip title={'price range 2'}>
            <circle
            cx={xScale(-1)}
            cy={yScale(1)}
            stroke={'blue'}
            fill={'white'}
            r={10}></circle></Tooltip>
            <Tooltip title={'price range 3'}>
            <circle
            cx={xScale(-1)}
            cy={yScale(-1)}
            stroke={'red'}
            fill={'white'}
            r={10}></circle></Tooltip>
            <Tooltip title={'price range 4'}>
            <circle
            cx={xScale(1)}
            cy={yScale(-1)}
            stroke={'cyan'}
            fill={'white'}
            r={10}></circle></Tooltip>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(1)}
          stroke={'black'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(-1)}
          stroke={'black'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(-1)}
          y2={yScale(-1)}
          stroke={'black'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(-1)}
          y2={yScale(1)}
          stroke={'black'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(1)}
          y1={yScale(-1)}
          y2={yScale(1)}
          stroke={'black'}></line>
          <line
          x1={xScale(-1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(-1)}
          stroke={'black'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(1)}
          stroke={'black'}></line>
          <line
          x1={xScale(1)}
          x2={xScale(-1)}
          y1={yScale(1)}
          y2={yScale(1)}
          stroke={'black'}></line>

        {data.filter(d=>((d.epoch===(10*epoch)))).map((d) => (
          <g>
            <Tooltip title={`Real class:${d.price_range+1}`}>
            <circle 
            id="sample"
            key={d.index}
            cx={xScale(gravity(d.prob0,d.prob1,d.prob2,d.prob3)[0])}
            cy={yScale(gravity(d.prob0,d.prob1,d.prob2,d.prob3)[1])}
            fill={colorScale(d.price_range)}
            r={5}
            ></circle></Tooltip>
          </g>
       ))}
       </g> 
     </svg>
      
   );

}
import React from 'react';
  import { scaleBand, scaleLinear} from 'd3';

 
  const width = 400;
  const height = 400;
  const margins={top:50,bottom:50,left:100,right:50};
  //['battery_power','blue,clock_speed','dual_sim,fc','four_g','int_memory','m_dep','mobile_wt','n_cores','pc','px_height','px_width','ram','sc_h','sc_w','talk_time','three_g','touch_screen','wifi']
export const Shap= (data)=>{
    const yScale = scaleBand()
     .domain(['battery_power','blue','clock_speed','dual_sim','fc','four_g','int_memory','m_dep','mobile_wt','n_cores','pc','px_height','px_width','ram','sc_h','sc_w','talk_time','three_g','touch_screen','wifi'])
     .range([margins.top, height-margins.bottom]);
 
   const xScale = scaleLinear()
     .domain([-0.5,0.5])
     .range([margins.left, width-margins.right]);

    const colorScale= scaleLinear()
    .domain([0,0.4])
    .range(["blue","red"])

    function mod(a){
      if(a<0){
        return -a
      }
      return a
    }
    
   return (
    <g>
      <svg width={width} height={height} transform={`translate(${margins.left+800},${margins.top-300})`} align='center'>
       {data.data.map((d) => (
        <g key={d.index}>
         <circle
           cy={yScale('battery_power')}
           cx={xScale(d.battery_power)}
           fill={colorScale(mod(d.battery_power))}
           r={2}
         />
         <circle
           cy={yScale("blue")}
           cx={xScale(d.blue)}
           fill={colorScale(mod(d.blue))}
           r={2}
         />
         <circle
           cy={yScale("clock_speed")}
           cx={xScale(d.clock_speed)}
           fill={colorScale(mod(d.clock_speed))}
           r={2}
         />
         <circle
           cy={yScale('dual_sim')}
           cx={xScale(d.dual_sim)}
           fill={colorScale(mod(d.dual_sim))}
           r={2}
         />
         <circle
           cy={yScale('fc')}
           cx={xScale(d.fc)}
           fill={colorScale(mod(d.fc))}
           r={2}
         />
         <circle
           cy={yScale('four_g')}
           cx={xScale(d.four_g)}
           fill={colorScale(mod(d.four_g))}
           r={2}
         />
         <circle
           cy={yScale('int_memory')}
           cx={xScale(d.int_memory)}
           fill={colorScale(mod(d.int_memory))}
           r={2}
         />\
         <circle
           cy={yScale('m_dep')}
           cx={xScale(d.m_dep)}
           fill={colorScale(mod(d.m_dep))}
           r={2}
         />
         <circle
           cy={yScale('mobile_w')}
           cx={xScale(d.mobile_w)}
           fill={colorScale(mod(d.mobile_w))}
           r={2}
         />
         <circle
           cy={yScale('n_cores')}
           cx={xScale(d.n_cores)}
           fill={colorScale(mod(d.n_cores))}
           r={2}
         />
         <circle
           cy={yScale('pc')}
           cx={xScale(d.pc)}
           fill={colorScale(mod(d.pc))}
           r={2}
         />
         <circle
           cy={yScale('px_height')}
           cx={xScale(d.px_height)}
           fill={colorScale(mod(d.px_height))}
           r={2}
         />

         <circle
           cy={yScale('px_width')}
           cx={xScale(d.px_width)}
           fill={colorScale(mod(d.px_width))}
           r={2}
         />
         <circle
           cy={yScale('ram')}
           cx={xScale(d.ram)}
           fill={colorScale(mod(d.ram))}
           r={2}
         />
         <circle
           cy={yScale('sc_h')}
           cx={xScale(d.sc_h)}
           fill={colorScale(mod(d.sc_h))}
           r={2}
         />
         <circle
           cy={yScale('sc_w')}
           cx={xScale(d.sc_w)}
           fill={colorScale(mod(d.sc_w))}
           r={2}
         />
         <circle
           cy={yScale('talk_time')}
           cx={xScale(d.talk_time)}
           fill={colorScale(mod(d.talk_time))}
           r={2}
         />
         <circle
           cy={yScale('three_g')}
           cx={xScale(d.three_g)}
           fill={colorScale(mod(d.three_g))}
           r={2}
         />
         <circle
           cy={yScale('touch_screen')}
           cx={xScale(d.touch_screen)}
           fill={colorScale(mod(d.touch_screen))}
           r={2}
         />
         <circle
           cy={yScale('wifi')}
           cx={xScale(d.wifi)}
           fill={colorScale(mod(d.wifi))}
           r={2}
         />
         </g>
       ))}
       {xScale.ticks().map((ticks)=>(
          <g key={ticks} transform={`translate(${xScale(ticks)},0)`}>
          <text
          style={{ textAnchor: 'middle' }}
              dy=".71em"
              y={height-60}>{ticks}</text>
          <line
          stroke={'black'}
          opacity={'60%'}
          //x1={xScale(ticks)}
          y1={height-62}
          //x2={xScale(ticks)}
          y2={50}></line>
        </g>
        ))
        }
       <text x={0} y={yScale('battery_power')}>battery_power</text>
       <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('battery_power')}
          x2={350}
          y2={yScale('battery_power')}></line>
         <text x={0} y={yScale('blue')}>blue</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('blue')}
          x2={350}
          y2={yScale('blue')}></line>
         <text x={0} y={yScale('clock_speed')}>clock_speed</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('clock_speed')}
          x2={350}
          y2={yScale('clock_speed')}></line>
         <text x={0} y={yScale('dual_sim')}>dual_sim</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('dual_sim')}
          x2={350}
          y2={yScale('dual_sim')}></line>
         <text x={0} y={yScale('fc')}>fc</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('fc')}
          x2={350}
          y2={yScale('fc')}></line>
         <text x={0} y={yScale('four_g')}>four_g</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('four_g')}
          x2={350}
          y2={yScale('four_g')}></line>
         <text x={0} y={yScale('int_memory')}>int_memory</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('int_memory')}
          x2={350}
          y2={yScale('int_memory')}></line>
         <text x={0} y={yScale('m_dep')}>m_dep</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('m_dep')}
          x2={350}
          y2={yScale('m_dep')}></line>
         <text x={0} y={yScale('mobile_wt')}>mobile_wt</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('mobile_wt')}
          x2={350}
          y2={yScale('mobile_wt')}></line>
         <text x={0} y={yScale('n_cores')}>n_cores</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('n_cores')}
          x2={350}
          y2={yScale('n_cores')}></line>
         <text x={0} y={yScale('pc')}>pc</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('pc')}
          x2={350}
          y2={yScale('pc')}></line>
         <text x={0} y={yScale('px_height')}>px_height</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('px_height')}
          x2={350}
          y2={yScale('px_height')}></line>
         <text x={0} y={yScale('px_width')}>px_width</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('px_width')}
          x2={350}
          y2={yScale('px_width')}></line>
         <text x={0} y={yScale('ram')}>ram</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('ram')}
          x2={350}
          y2={yScale('ram')}></line>
         <text x={0} y={yScale('sc_h')}>sc_h</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('sc_h')}
          x2={350}
          y2={yScale('sc_h')}></line>
         <text x={0} y={yScale('sc_w')}>sc_w</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('sc_w')}
          x2={350}
          y2={yScale('sc_w')}></line>
         <text x={0} y={yScale('talk_time')}>talk_time</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('talk_time')}
          x2={350}
          y2={yScale('talk_time')}></line>
         <text x={0} y={yScale('three_g')}>three_g</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('three_g')}
          x2={350}
          y2={yScale('three_g')}></line>
         <text x={0} y={yScale('touch_screen')}>touch_screen</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('touch_screen')}
          x2={350}
          y2={yScale('touch_screen')}></line>
         <text x={0} y={yScale('wifi')}>wifi</text>
         <line
          stroke={'black'}
          opacity={'60%'}
          x1={100}
          y1={yScale('wifi')}
          x2={350}
          y2={yScale('wifi')}></line>
         <text x={110} y={495}>SHAP values(indicates impact of feature)</text>
     </svg>
     </g>
   );

}
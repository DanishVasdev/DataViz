import React from 'react';
  import { scaleBand, scaleLinear} from 'd3';

 
  const width = 500;
  const height = 500;
  const margins={top:50,bottom:50,left:100,right:50};
  //['battery_power','blue,clock_speed','dual_sim,fc','four_g','int_memory','m_dep','mobile_wt','n_cores','pc','px_height','px_width','ram','sc_h','sc_w','talk_time','three_g','touch_screen','wifi']
export const Shap= (data)=>{
    const yScale = scaleBand()
     .domain(['battery_power','blue','clock_speed','dual_sim','fc','four_g','int_memory','m_dep','mobile_wt','n_cores','pc','px_height','px_width','ram','sc_h','sc_w','talk_time','three_g','touch_screen','wifi'])
     .range([margins.top, height-margins.bottom]);
 
   const xScale = scaleLinear()
     .domain([-0.5,0.5])
     .range([margins.left, width-margins.right]);
    
   return (
    <g>
      <svg width={width} height={height} transform={`translate(${margins.left},${margins.top})`} align='center'>
       {data.data.map((d) => (
        <g key={d.index}>
         <circle
           cy={yScale('battery_power')}
           cx={xScale(d.battery_power)}
           r={2}
         />
         <circle
           cy={yScale("blue")}
           cx={xScale(d.blue)}
           r={2}
         />
         <circle
           cy={yScale("clock_speed")}
           cx={xScale(d.clock_speed)}
           r={2}
         />
         <circle
           cy={yScale('dual_sim')}
           cx={xScale(d.ram)}
           r={2}
         />
         <circle
           cy={yScale('fc')}
           cx={xScale(d.fc)}
           r={2}
         />
         <circle
           cy={yScale('four_g')}
           cx={xScale(d.four_g)}
           r={2}
         />
         <circle
           cy={yScale('int_memory')}
           cx={xScale(d.int_memory)}
           r={2}
         />\
         <circle
           cy={yScale('m_dep')}
           cx={xScale(d.m_dep)}
           r={2}
         />
         <circle
           cy={yScale('mobile_w')}
           cx={xScale(d.mobile_w)}
           r={2}
         />
         <circle
           cy={yScale('n_cores')}
           cx={xScale(d.n_cores)}
           r={2}
         />
         <circle
           cy={yScale('pc')}
           cx={xScale(d.pc)}
           r={2}
         />
         <circle
           cy={yScale('px_height')}
           cx={xScale(d.px_height)}
           r={2}
         />

         <circle
           cy={yScale('px_width')}
           cx={xScale(d.px_width)}
           r={2}
         />
         <circle
           cy={yScale('ram')}
           cx={xScale(d.ram)}
           r={2}
         />
         <circle
           cy={yScale('sc_h')}
           cx={xScale(d.sc_h)}
           r={2}
         />
         <circle
           cy={yScale('sc_w')}
           cx={xScale(d.sc_w)}
           r={2}
         />
         <circle
           cy={yScale('talk_time')}
           cx={xScale(d.talk_time)}
           r={2}
         />
         <circle
           cy={yScale('three_g')}
           cx={xScale(d.three_g)}
           r={2}
         />
         <circle
           cy={yScale('touch_screen')}
           cx={xScale(d.three_g)}
           r={2}
         />
         <circle
           cy={yScale('three_g')}
           cx={xScale(d.three_g)}
           r={2}
         />
         <circle
           cy={yScale('wifi')}
           cx={xScale(d.three_g)}
           r={2}
         />
         </g>
       ))}
       {xScale.ticks().map((ticks)=>(
          <g key={ticks} transform={`translate(${xScale(ticks)},0)`}>
          <text
          style={{ textAnchor: 'middle' }}
              dy=".71em"
              y={height-30}>{ticks}</text>
        </g>
        ))
        }
       <text x={0} y={yScale('battery_power')}>battery_power</text>
         <text x={0} y={yScale('blue')}>blue</text>
         <text x={0} y={yScale('clock_speed')}>clock_speed</text>
         <text x={0} y={yScale('dual_sim')}>dual_sim</text>
         <text x={0} y={yScale('fc')}>fc</text>
         <text x={0} y={yScale('four_g')}>four_g</text>
         <text x={0} y={yScale('int_memory')}>int_memory</text>
         <text x={0} y={yScale('m_dep')}>m_dep</text>
         <text x={0} y={yScale('mobile_wt')}>mobile_wt</text>
         <text x={0} y={yScale('n_cores')}>n_cores</text>
         <text x={0} y={yScale('pc')}>pc</text>
         <text x={0} y={yScale('px_height')}>px_height</text>
         <text x={0} y={yScale('px_width')}>px_width</text>
         <text x={0} y={yScale('ram')}>ram</text>
         <text x={0} y={yScale('sc_h')}>sc_h</text>
         <text x={0} y={yScale('sc_w')}>sc_w</text>
         <text x={0} y={yScale('talk_time')}>talk_time</text>
         <text x={0} y={yScale('three_g')}>three_g</text>
         <text x={0} y={yScale('touch_screen')}>touch_screen</text>
         <text x={0} y={yScale('wifi')}>wifi</text>
         <text x={110} y={495}>SHAP values(indicates impact of feature)</text>
     </svg>
     </g>
   );

}
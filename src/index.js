import React, {
   useState,
   useEffect,
 } from 'react';
 import ReactDOM from 'react-dom';
 import { csv } from 'd3';
 import { Line_chart } from './line-chart';
 import { Heat_Map } from './heatmap';
 import { Shap } from './shap';
import { Network } from './network';
import { Planet } from './planet_graph';
// import {
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   SliderMark,
// } from '@chakra-ui/react'
import Slider from 'react-input-slider';
//import Slider from 'react-rangeslider';
//import 'react-rangeslider/lib/index.css';
 
const csvUrl =
   'https://gist.githubusercontent.com/DanishVasdev/aa65651c100d6c00d991e1e0eb5a756b/raw/training.csv';
const conf_mat =
   'https://gist.githubusercontent.com/DanishVasdev/d1521316341638041547f479469b949a/raw/confusion_matrix.csv';
const shap =
   'https://gist.githubusercontent.com/DanishVasdev/fb365733ea94c8a1c3f345a588acff48/raw/shap2.csv';
const weights=
  'https://gist.githubusercontent.com/DanishVasdev/6d86aa31a210ec44e7cc193c3df3eb57/raw/weights.csv'
const preds=
  'https://gist.githubusercontent.com/DanishVasdev/be3ea43fcc02191ad57e649eb340b933/raw/preds.csv'
 
 const App = () => {
   const [data, setData] = useState(null);
   useEffect(() => {
    const parse=(data)=>{
      data.epoch=+data.epoch
      data.accuracy=+data.accuracy
      data.false_negatives=+data.false_negatives
      data.false_positives=+data.false_positives
      data.loss=+data.loss
      data.true_negatives=+data.true_negatives
      data.true_positives=+data.true_positives
      return(data);
    }
     csv(csvUrl,parse).then(setData);
   }, []);
   
   const [data2, setData2]=useState(null);
   useEffect(() => {
    const parse=(data)=>{
      data.index=+data.index
      data.price_range=+data.price_range
      data.prediction=+data.prediction
      data.matching=+data.matching
      return(data);
    }
     csv(conf_mat,parse).then(setData2);
   }, []);
   const [data3, setData3]=useState(null);
   useEffect(() => {
    const parse=(data)=>{
      data.index=parseInt(data.index);
      data.battery_power=parseFloat(data.battery_power);
      data.blue=parseFloat(data.blue);
      data.clock_speed=parseFloat(data.clock_speed);
      data.dual_sim=parseFloat(data.dual_sim);
      data.fc=parseFloat(data.fc);
      data.four_g=parseFloat(data.four_g);
      data.int_memory=parseFloat(data.int_memory);
      data.m_dep=parseFloat(data.m_dep);
      data.mobile_wt=parseFloat(data.mobile_wt);
      data.n_cores=parseFloat(data.n_cores);
      data.pc=parseFloat(data.pc);
      data.px_height=parseFloat(data.px_height);
      data.px_width=parseFloat(data.px_width);
      data.ram=parseFloat(data.ram);
      data.sc_h=parseFloat(data.sc_h);
      data.sc_w=parseFloat(data.sc_w);
      data.talk_time=parseFloat(data.talk_time);
      data.three_g=parseFloat(data.three_g);
      data.touch_screen=parseFloat(data.touch_screen);
      data.wifi=parseFloat(data.wifi);
      return(data);
    }
     csv(shap,parse).then(setData3);
   }, []);
   const [data4, setData4] = useState(null);
   useEffect(() => {
    const parse=(data)=>{
      data.index=+data.index
      data.node=+data.node
      data.epoch=+data.epoch
      data.layer=+data.layer
      data.weight=parseFloat(data.weight)
      data.bias=parseFloat(data.bias)
      data.target=+data.target
      return(data);
    }
     csv(weights,parse).then(setData4);
   }, []);
   const [data5, setData5] = useState(null);
   useEffect(() => {
    const parse=(data)=>{
      data.index=+data.index
      data.epoch=+data.epoch
      data.price_range=+data.price_range
      data.prob0=+data.prob0
      data.prob1=+data.prob1
      data.prob2=+data.prob2
      data.prob3=+data.prob3
      return(data);
    }
     csv(preds,parse).then(setData5);
   }, []);
   const [epoch,setEpoch]=useState({value:0})
   if (!data) {
    return <pre>Loading...</pre>;
  }
   if (!data2) {
     return <pre>Loading...</pre>;
   }
   if (!data3) {
    return <pre>Loading...</pre>;
  }
  if (!data4) {
    return <pre>Loading...</pre>;
  }
  if (!data5) {
    return <pre>Loading...</pre>;
  }
  console.log(data5)
  const props1={
    epoch:epoch.value,
    data:data5
    
  }
  const props2={
    epoch:epoch.value,
    data:data4
    
  }
   return(
    <g>
    <h1 align='center'>Visualization of MLP</h1>
    <div>
    <div>
    <h3>Epoch: {10*epoch.value}</h3>
    <Slider
    axis='x'
    step={1}
    xmin={0}
    xmax={9}
    x={epoch.value}
    onChange={( state ) =>setEpoch({value:state.x})}
    > </Slider>
    </div>
    
    <Network props={props2}></Network>
    <Planet props={props1}></Planet>
    <Line_chart data={data}/>
    <Heat_Map data={data2}></Heat_Map>
    <Shap data={data3}></Shap>
    </div>
    </g>
   );
 };
 const rootElement = document.getElementById('root');
 ReactDOM.render(<App />, rootElement);


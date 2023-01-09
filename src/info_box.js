import React from 'react';
import {scaleBand} from 'd3';
 
  const width = 960;
  const height = 500;
  const margins={top:50,bottom:50,left:100,right:50};
  const scl=scaleBand()
              .domain([0,1,2,3,4,5,6,7])
              .range([400,560])
export const Info= (layer)=>{
  //console.log(layer.layer.weights)
  
  function printWeights(w){
    return(
      <g>
    {w.map((wg)=>(
      <text x={300} y={scl(w.indexOf(wg))}>{wg}</text>
    ))}
    </g>
    );
  }
    if(layer.layer.value===-1){
        return (
            <g>
            <rect x={220} y={280} height={200} width={200}
            stroke="black"
            fill="white"></rect>
            <text x={240} y={300}>
              Layer: NA
            </text>
            <text x={240} y={320}>
              Type: NA
              </text>
            <text x={240} y={340}>
              Activation: NA
            </text>
            <text x={240} y={360}>
              Node: NA
            </text>
            <text x={240} y={380}>
              Bias: NA
            </text>
            <text x={240} y={400}>
              Weigths: NA
            </text>
            </g>
       );
    }
    else if(layer.layer.value===0){
        return (
            <g>
            <rect x={220} y={280} height={280} width={200}
            stroke="black"
            fill="white"></rect>
            <text x={240} y={300}>
              Layer: 1
            </text>
            <text x={240} y={320}>
              Type: Input
              </text>
            <text x={240} y={340}>
              Activation: NA
            </text>
            <text x={240} y={360}>
              Node: {layer.layer.node+1}
            </text>
            <text x={240} y={380}>
              Bias: {layer.layer.bias}
            </text>
            <text x={240} y={400}>
              Weigths:
            </text>
            {printWeights(layer.layer.weights)}
            </g>
       );
    }
    else if(layer.layer.value===1){
        return (
            <g>
            <rect x={220} y={280} height={280} width={200}
            stroke="black"
            fill="white"></rect>
            <text x={240} y={300}>
              Layer: 2
            </text>
            <text x={240} y={320}>
              Type: Dense Hidden Layer
              </text>
            <text x={240} y={340}>
              Activation: Relu
            </text>
            <text x={240} y={360}>
              Node: {layer.layer.node+1}
            </text>
            <text x={240} y={380}>
              Bias: {layer.layer.bias}
            </text>
            <text x={240} y={400}>
              Weigths:
            </text>
            {printWeights(layer.layer.weights)}
            </g>
       );
    }
    else if(layer.layer.value===2){
        return (
            <g>
            <rect x={220} y={280} height={200} width={200}
            stroke="black"
            fill="white"></rect>
            <text x={240} y={300}>
              Layer: 3
            </text>
            <text x={240} y={320}>
              Type: Dense Hidden Layer
              </text>
            <text x={240} y={340}>
              Activation: Relu
            </text>
            <text x={240} y={360}>
              Node: {layer.layer.node+1}
            </text>
            <text x={240} y={380}>
              Bias: {layer.layer.bias}
            </text>
            <text x={240} y={400}>
              Weigths:
            </text>
            {printWeights(layer.layer.weights)}
            </g>
       );
    }
    else if(layer.layer.value===3){
        return (
            <g>
            <rect x={220} y={280} height={200} width={200}
            stroke="black"
            fill="white"></rect>
            <text x={240} y={300}>
              Layer: 4
            </text>
            <text x={240} y={320}>
              Type: Output
              </text>
            <text x={240} y={340}>
              Activation: softmax
            </text>
            <text x={240} y={360}>
              Node: {layer.layer.node+1}
            </text>
            <text x={240} y={380}>
              Bias: {layer.layer.bias}
            </text>
            <text x={240} y={400}>
              Weigths:NA
            </text>
            </g>
       );
    }

    
   

}
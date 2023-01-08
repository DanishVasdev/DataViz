import React from 'react';

 
  const width = 960;
  const height = 500;
  const margins={top:50,bottom:50,left:100,right:50};
export const Info= (layer)=>{
    if(layer.layer===-1){
        return (
            <g>
            <rect x={220} y={280} height={80} width={200}
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
            </g>
       );
    }
    else if(layer.layer===0){
        return (
            <g>
            <rect x={220} y={280} height={80} width={200}
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
            </g>
       );
    }
    else if(layer.layer===1){
        return (
            <g>
            <rect x={220} y={280} height={80} width={200}
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
            </g>
       );
    }
    else if(layer.layer===2){
        return (
            <g>
            <rect x={220} y={280} height={80} width={200}
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
            </g>
       );
    }
    else if(layer.layer===3){
        return (
            <g>
            <rect x={220} y={280} height={80} width={200}
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
            </g>
       );
    }

    
   

}
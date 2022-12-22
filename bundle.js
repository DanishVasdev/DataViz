

(function (React, ReactDOM, d3) {
    'use strict';
  
    React = React && React.hasOwnProperty('default') ? React['default'] : React;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  
    const width = 960;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const strokeWidth = 20;
    const eyeOffsetX = 90;
    const eyeOffsetY = 100;
    const eyeRadius = 40;
    const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = d3.arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2);

const App = () => (
  React.createElement( 'svg', { width: width, height: height },
    React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
      React.createElement( 'circle', {
        r: centerY - strokeWidth / 2, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth }),
      React.createElement( 'circle', {
        cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
      React.createElement( 'circle', {
        cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
      React.createElement( 'path', { d: mouthArc() })
    )
  )
);

const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));
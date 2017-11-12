import React, { Component } from 'react';
import customers from '../../customers.json';

let x = [];
let y = [];

let getSalary = () => {
  for(let i = 0; i < customers.length; ++i) {
    let income = customers[i].income !== null? customers[i].income: 0;
    x.push(income);
    y.push(i + 1);
  }
}

let plot = {
  x: x,
  y: y,
  mode: 'lines+markers',
  type: 'scatter'
};

let data = [ plot ];

let layout = {
  title:'Income Plot'
};

class Graph extends Component {
  render() {
    return (
    <div id="graph-plot">
    </div>
    );
  }
}

export default Graph;
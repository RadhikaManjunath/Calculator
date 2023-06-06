import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Component/Calculator.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  ReactDOM.render(<Calculator />, document.getElementById('root'))

);

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Source from './components/Source';
import Destination from './components/Destination';

ReactDOM.render(
  <React.StrictMode>        
    <div className="container">
      <h1>Statblock translation helper</h1>
      <div className="grid">
        <Source />
        <Destination />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Source from './components/Source';
import Destination from './components/Destination';

const MainForm: React.FC = () => {
  const [sourceValue, changeSourceValue] = useState('');
  return (
    <div className="grid">
      <Source
        onChange={(e: React.FormEvent) => {
          changeSourceValue((e.target as HTMLTextAreaElement).value);
        }}
        value={sourceValue}
      />
      <Destination value={sourceValue} />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>Statblock translation helper</h1>
      <MainForm />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

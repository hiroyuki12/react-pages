import React from 'react';
import { LinePlot } from './LinePlot';
import { PiePlot } from './PiePlot';

const ChartApp: React.FC = () => {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
    </div>
  );
}

export default ChartApp;

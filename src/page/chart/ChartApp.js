import React from 'react';
import { LinePlot } from './LinePlot';
import { PiePlot } from './PiePlot';

const ChartApp: React.FC = () => {
  return (
    <div className="App">
      <a href="https://mbp.hatenablog.com/entry/2021/08/11/231449" target="_blank" rel="noreferrer">Reactで棒グラフ、円グラフを作成</a><br />
      <LinePlot />
      <PiePlot />
    </div>
  );
}

export default ChartApp;

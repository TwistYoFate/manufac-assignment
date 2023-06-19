import React, { useEffect, useState } from 'react';
import MeanMedianMode from './containers/MeanMedianMode';
import { DataPoint } from './domain/types';
import jsonData from './data/data.json';
import { calculateGamma, refineDataPoint } from './domain';
import './App.css';

function App() {

  const [dataPoints,setDataPoints] = useState<DataPoint[]>([]);

  // On component mount, fetch data and add Gamma property to each data point
  useEffect(()=>{
    const data:DataPoint[] = refineDataPoint(jsonData);
    data.forEach(obj=>{
      obj["Gamma"] = calculateGamma(obj);
    })
    setDataPoints(data);
  },[])

  return (
    <div className="app">
      <MeanMedianMode dataPoints={dataPoints} targetKey={"Flavanoids"} classKey={'Alcohol'} />
      <MeanMedianMode dataPoints={dataPoints} targetKey={"Gamma"} classKey={'Alcohol'} />
    </div>
  );
}

export default App;

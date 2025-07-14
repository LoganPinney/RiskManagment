import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';
import {
  calculateRiskPerTrade,
  calculateTotalPotentialLoss,
  calculateTotalPotentialGain
} from './utils/calculations';

export default function App() {
  const [inputs, setInputs] = useState({
    capital: 100000,
    riskPercent: 1,
    dailyMax: 5,
    weeklyMax: 10,
    stopAfterReds: 3,
    sharePrice: 50,
    shares: 100,
    target: 1
  });
  const [presets, setPresets] = useState({});

  useEffect(() => {
    window.api.loadPresets().then(setPresets);
  }, []);

  const handleSavePreset = (name) => {
    const all = { ...presets, [name]: inputs };
    window.api.savePresets(all).then(() => setPresets(all));
  };

  const riskPerTrade = calculateRiskPerTrade(inputs);
  const totalLoss = calculateTotalPotentialLoss(inputs);
  const totalGain = calculateTotalPotentialGain(inputs);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar
        inputs={inputs}
        setInputs={setInputs}
        presets={presets}
        onSavePreset={handleSavePreset}
      />
      <Graph
        inputs={inputs}
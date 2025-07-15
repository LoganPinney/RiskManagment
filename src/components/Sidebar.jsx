import React from 'react';

export default function Sidebar({ inputs, setInputs, presets, onSavePreset }) {
  const update = (key) => (e) => setInputs({ ...inputs, [key]: parseFloat(e.target.value) });
  return (
    <div style={{ width: '350px', padding: '20px', background: '#f0f0f0' }}>
      {Object.entries(inputs).map(([key, val]) => (
        <div key={key} style={{ marginBottom: '15px' }}>
          <label>{key}</label>
          <input
            type="range"
            min={key === 'riskPercent' ? 0 : 0}
            max={key === 'riskPercent' ? 100 : 1000}
            value={val}
            onChange={update(key)}
          />
          <input
            type="number"
            value={val}
            onChange={update(key)}
            style={{ width: '80px', marginLeft: '10px' }}
          />
        </div>
      ))}
      <div>
        <h4>Presets</h4>
        <select onChange={(e) => setInputs(presets[e.target.value] || inputs)}>
          <option>--Select--</option>
          {Object.keys(presets).map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <button onClick={() => onSavePreset(prompt('Preset name:'))}>Save Preset</button>
      </div>
    </div>
  );
}

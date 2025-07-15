import React, { useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

export default function Graph({ inputs, riskPerTrade, totalLoss, totalGain }) {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Trade'],
        datasets: [
          {
            label: 'Potential P/L',
            data: [totalGain, -totalLoss],
            borderColor: 'lime',
            backgroundColor: 'transparent',
            pointBackgroundColor: ['red', 'red'],
            fill: false,
            tension: 0.4
          }
        ]
      },
      options: {
        scales: {
          x: { grid: { color: 'lime', lineWidth: 0.1 }, ticks: { color: 'lime' } },
          y: { grid: { color: 'lime', lineWidth: 0.1 }, ticks: { color: 'lime' } }
        },
        elements: { line: { borderWidth: 2 }, point: { radius: 6 } },
        plugins: { legend: { labels: { color: 'lime' } } },
        layout: { padding: 10 },
        responsive: true,
        maintainAspectRatio: false,
        background: 'black'
      }
    });
  }, [totalGain, totalLoss]);

  return (
    <div style={{ flex: 1, background: '#000', position: 'relative' }}>
      <canvas ref={canvasRef} />
    </div>
  );
}

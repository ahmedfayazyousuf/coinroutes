import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PriceChart = ({ data }) => {
  const [showBids, setShowBids] = useState(true);
  const [showAsks, setShowAsks] = useState(true);

  const bidData = data.filter(d => d.type === 'bid');
  const askData = data.filter(d => d.type === 'ask');

  const chartData = {
    labels: bidData.length ? bidData.map(d => d.timestamp) : askData.map(d => d.timestamp),
    datasets: [
      showBids && {
        label: 'Bid Prices',
        data: bidData.map(d => d.price),
        borderColor: '#21c700',
        backgroundColor: 'rgba(75,192,192,0.3)',
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
      showAsks && {
        label: 'Ask Prices',
        data: askData.map(d => d.price),
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255,87,51,0.3)',
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
    ].filter(Boolean),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#aaa',
        },
        grid: {
          color: '#444',
        },
      },
      y: {
        ticks: {
          color: '#aaa',
        },
        grid: {
          color: '#444',
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#0e1820', padding: '20px', borderRadius: '8px' }}>
      <h1 className="top-of-book-title">Price Chart</h1>
      <div>
        <button onClick={() => setShowBids(!showBids)} style={{ marginRight: '10px' }}>
          Toggle Bids
        </button>
        <button onClick={() => setShowAsks(!showAsks)}>
          Toggle Asks
        </button>
      </div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default PriceChart;

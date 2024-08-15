import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PriceChart = ({ data, historicalData }) => {
  // eslint-disable-next-line 
  const [showBids, setShowBids] = useState(true);
  // eslint-disable-next-line 
  const [showAsks, setShowAsks] = useState(true);

  const bidData = data.filter(d => d.type === 'bid');
  const askData = data.filter(d => d.type === 'ask');

  const realTimeChartData = {
    labels: bidData.length ? bidData.map(d => d.timestamp) : askData.map(d => d.timestamp),
    datasets: [
      showBids && {
        label: 'Bid Prices',
        data: bidData.map(d => d.price),
        borderColor: '#21c700',
        backgroundColor: 'rgba(33, 199, 0, 0.3)',
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
      showAsks && {
        label: 'Ask Prices',
        data: askData.map(d => d.price),
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.3)',
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
    ].filter(Boolean),
  };

  const historicalChartData = {
    labels: historicalData.map(d => d.timestamp),
    datasets: [
      {
        label: 'Historical Prices',
        data: historicalData.map(d => d.price),
        borderColor: '#4BC0C0',
        backgroundColor: 'rgba(75,192,192,0.3)',
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
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
      <div className="chart-container">
        <div className="chart">
          <p>Real-Time Prices</p>
          <Line data={realTimeChartData} options={chartOptions} />
        </div>
        <div className="chart">
          <p>Historical Prices</p>
          <Line data={historicalChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default PriceChart;

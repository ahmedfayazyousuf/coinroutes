import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PriceChart = ({ data }) => {
  // Check if data is provided and has the expected structure
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Prepare the data for bids and asks
  const bidData = data.map(d => ({
    x: d.timestamp,
    y: d.bestBid ? parseFloat(d.bestBid.price) : null,
  })).filter(d => d.y !== null);

  const askData = data.map(d => ({
    x: d.timestamp,
    y: d.bestAsk ? parseFloat(d.bestAsk.price) : null,
  })).filter(d => d.y !== null);

  const chartData = {
    datasets: [
      {
        label: 'Best Bid',
        data: bidData,
        borderColor: 'rgba(255,99,132,1)', // Red color for bids
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true,
      },
      {
        label: 'Best Ask',
        data: askData,
        borderColor: 'rgba(75,192,192,1)', // Green color for asks
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PriceChart;

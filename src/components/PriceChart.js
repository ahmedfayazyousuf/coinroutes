import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PriceChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.timestamp),
    datasets: [
      {
        label: 'Price',
        data: data.map(d => d.price),
        borderColor: '#4BC0C0', // Teal color for the line
        backgroundColor: 'rgba(75,192,192,0.3)', // Light teal background
        fill: true,
        pointRadius: 0, // Remove data points for a cleaner look
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff', // White color for legend labels
        },
      },
      tooltip: {
        backgroundColor: '#333', // Dark background for tooltips
        titleColor: '#fff', // White title color for tooltips
        bodyColor: '#fff', // White body color for tooltips
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#aaa', // Light gray for x-axis labels
        },
        grid: {
          color: '#444', // Dark gray grid lines
        },
      },
      y: {
        ticks: {
          color: '#aaa', // Light gray for y-axis labels
        },
        grid: {
          color: '#444', // Dark gray grid lines
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#0e1820', padding: '20px', borderRadius: '8px' }}>
      <h1 className="top-of-book-title">Price Chart</h1>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default PriceChart;

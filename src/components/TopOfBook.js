// src/components/TopOfBook.js
import React from 'react';

const TopOfBook = ({ topOfBook }) => {
  if (!topOfBook) return <div>Loading Top of Book...</div>;

  const { bestBid, bestAsk, spread, volume24h } = topOfBook;

  return (
    <div>
      <h3>Top of Book</h3>
      <div>Best Bid: {bestBid.price} - {bestBid.quantity}</div>
      <div>Best Ask: {bestAsk.price} - {bestAsk.quantity}</div>
      <div>Spread: {spread}</div>
      <div>24h Volume: {volume24h}</div>
    </div>
  );
};


export default TopOfBook;

// src/components/TopOfBook.js
import React from 'react';

const TopOfBook = ({ topOfBook }) => {
  if (!topOfBook) return null;

  const { bestBid, bestAsk } = topOfBook;

  return (
    <div>
      <h3>Top of Book</h3>
      <div>Best Bid: {bestBid.price} - {bestBid.quantity}</div>
      <div>Best Ask: {bestAsk.price} - {bestAsk.quantity}</div>
    </div>
  );
};

export default TopOfBook;

import React from 'react';

const TopOfBook = ({ topOfBook }) => {
  if (!topOfBook) return <div className="top-of-book-loading">Loading Top of Book...</div>;

  const { bestBid, bestAsk, spread, volume24h } = topOfBook;

  return (
    <div className="top-of-book-container">
      <h1 className="top-of-book-title">Top of Book</h1>
      <div className="top-of-book-tables">
        <div className="top-of-book-table">
          <h4>Best Bid</h4>
          <div className="top-of-book-table">
            <div className="top-of-book-header">
              <div className="top-of-book-header-cell">Price ($)</div>
              <div className="top-of-book-header-cell">Quantity</div>
            </div>
            <div className="top-of-book-body">
              <div className="top-of-book-row">
                <div className="top-of-book-cell" style={{color: '#21c700'}}>{bestBid.price}</div>
                <div className="top-of-book-cell">{bestBid.quantity}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-of-book-table">
          <h4>Best Ask</h4>
          <div className="top-of-book-table">
            <div className="top-of-book-header">
              <div className="top-of-book-header-cell">Price ($)</div>
              <div className="top-of-book-header-cell">Quantity</div>
            </div>
            <div className="top-of-book-body">
              <div className="top-of-book-row">
                <div className="top-of-book-cell" style={{color: 'red'}}>{bestAsk.price}</div>
                <div className="top-of-book-cell">{bestAsk.quantity}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-of-book-summary">
        <div>Spread: {spread}</div>
        <div>24h Volume: {volume24h}</div>
      </div>
    </div>
  );
};

export default TopOfBook;

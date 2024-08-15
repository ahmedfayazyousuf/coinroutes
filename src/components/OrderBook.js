import React from 'react';

const OrderBook = ({ orderBook }) => {
    if (!orderBook) return null;
  
    const { bids, asks } = orderBook;
  
    // Ensure bids and asks are arrays of arrays
    const formattedBids = bids ? bids.map(([price, quantity]) => ({ price, quantity })) : [];
    const formattedAsks = asks ? asks.map(([price, quantity]) => ({ price, quantity })) : [];
  
    return (
      <div>
        <h3>Order Book</h3>
        <div>
          <h4>Bids</h4>
          {formattedBids.length === 0 ? <p>No bids available</p> : (
            <div>
              {formattedBids.map((bid, index) => (
                <div key={index}>
                  {bid.price} - {bid.quantity}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <h4>Asks</h4>
          {formattedAsks.length === 0 ? <p>No asks available</p> : (
            <div>
              {formattedAsks.map((ask, index) => (
                <div key={index}>
                  {ask.price} - {ask.quantity}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default OrderBook;

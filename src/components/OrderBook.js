import React from 'react';

const OrderBook = ({ orderBook }) => {
    if (!orderBook || orderBook.bids.length === 0 || orderBook.asks.length === 0) {
      return <div>No Order Book Data Available</div>;
    }
  
    const { bids, asks } = orderBook;
  
    return (
      <div>
        <h3>Order Book</h3>
        <div>
          <h4>Bids</h4>
          {bids.map((bid) => (
            <div key={bid.price}>
              {bid.price} - {bid.quantity}
            </div>
          ))}
        </div>
        <div>
          <h4>Asks</h4>
          {asks.map((ask) => (
            <div key={ask.price}>
              {ask.price} - {ask.quantity}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default OrderBook;

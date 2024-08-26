import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const OrderBook = ({ orderBook }) => {
  const [priceIncrement, setPriceIncrement] = useState(0.01);

  const formatOrders = (orders) => {
    const aggregatedOrders = {};

    orders.forEach(({ price, quantity }) => {
      if (parseFloat(quantity) === 0) return;

      const roundedPrice = Math.floor(price / priceIncrement) * priceIncrement;
      if (!aggregatedOrders[roundedPrice]) {
        aggregatedOrders[roundedPrice] = 0;
      }
      aggregatedOrders[roundedPrice] += parseFloat(quantity);
    });

    return Object.entries(aggregatedOrders)
      .map(([price, quantity]) => ({
        price: parseFloat(price),
        quantity: parseFloat(quantity),
      }))
      .sort((a, b) => a.price - b.price);
  };

  useEffect(() => {}, [priceIncrement, orderBook]);

  if (!orderBook) return <p>Loading Order Book...</p>;

  const formattedBids = Array.isArray(orderBook.bids) ? formatOrders(orderBook.bids) : [];
  const formattedAsks = Array.isArray(orderBook.asks) ? formatOrders(orderBook.asks) : [];

  return (
    <>
      <div className="order-book-header">
        <h1 className="top-of-book-title" style={{ marginLeft: '10px' }}>Order Book</h1>
        <Dropdown
          options={[0.01, 0.05, 0.10].map(val => val.toFixed(2))}
          selectedOption={priceIncrement.toFixed(2)}
          onSelect={(value) => setPriceIncrement(parseFloat(value))}
        />
      </div>

      <div className="order-book-container">
        <div className="order-book-sections">
          <div className="order-book-section">
            <h4 style={{ marginBottom: '5px' }}>Bids</h4>
            <div className="order-book-table">
              <div className="order-book-header" style={{ backgroundColor: '#142029', paddingLeft: '10px' }}>
                <div className="order-book-header-cell">Price ($)</div>
                <div className="order-book-header-cell">Quantity</div>
              </div>
              <div className="order-book-body">
                {formattedBids.length === 0 ? <p style={{fontSize: '13px'}}>No bids available</p> : (
                  formattedBids.map((bid, index) => (
                    <div key={index} className="order-book-row">
                      <div className="order-book-cell order-book-cell-bid" style={{ color: '#21c700' }}>{bid.price.toFixed(2)}</div>
                      <div className="order-book-cell order-book-cell-bid">{bid.quantity.toFixed(2)}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="order-book-section">
            <h4 style={{ marginBottom: '5px' }}>Asks</h4>
            <div className="order-book-table">
              <div className="order-book-header" style={{ backgroundColor: '#142029', paddingLeft: '10px' }}>
                <div className="order-book-header-cell">Price ($)</div>
                <div className="order-book-header-cell">Quantity</div>
              </div>
              <div className="order-book-body">
                {formattedAsks.length === 0 ? <p style={{fontSize: '13px'}}>No asks available</p> : (
                  formattedAsks.map((ask, index) => (
                    <div key={index} className="order-book-row">
                      <div className="order-book-cell order-book-cell-ask" style={{ color: 'red' }}>{ask.price.toFixed(2)}</div>
                      <div className="order-book-cell order-book-cell-ask">{ask.quantity.toFixed(2)}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderBook;

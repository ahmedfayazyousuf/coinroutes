import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';
import Dropdown from './components/Dropdown';
import TopOfBook from './components/TopOfBook';
import PriceChart from './components/PriceChart';
import OrderBook from './components/OrderBook';

const currencyPairs = ['BTC-USD', 'ETH-USD', 'LTC-USD', 'BCH-USD'];

function App() {
  const [currencyPair, setCurrencyPair] = useState('BTC-USD');
  const [topOfBook, setTopOfBook] = useState(null);
  const [priceData, setPriceData] = useState([]);
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const socket = new WebSocket('wss://ws-feed.exchange.coinbase.com');

    socket.onopen = () => {
      console.log('WebSocket connection opened');
      const subscribeMessage = {
        type: 'subscribe',
        product_ids: [currencyPair],
        channels: ['ticker', 'level2_batch'],
      };
      socket.send(JSON.stringify(subscribeMessage));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'ticker' && data.product_id === currencyPair) {
        setTopOfBook({
          bestBid: { price: data.best_bid, quantity: data.best_bid_size },
          bestAsk: { price: data.best_ask, quantity: data.best_ask_size },
          spread: (parseFloat(data.best_ask) - parseFloat(data.best_bid)).toFixed(2),
          volume24h: data.volume_24h,
        });
        setPriceData(prevData => [
          ...prevData,
          { timestamp: new Date(data.time).toLocaleTimeString(), price: data.price }
        ]);
      } else if (data.type === 'level2_batch') {
        setOrderBook({
          bids: data.bids || [],
          asks: data.asks || [],
        });
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => socket.close();
  }, [currencyPair]);

  return (
    <Router>
      <CursorTracker />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <div>
              <Dropdown
                options={currencyPairs}
                selectedOption={currencyPair}
                onSelect={setCurrencyPair}
              />
              <div className="widget">
                <TopOfBook topOfBook={topOfBook} />
              </div>
              <div className="widget">
                <PriceChart data={priceData} />
              </div>
              <div className="widget">
                <OrderBook orderBook={orderBook} />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

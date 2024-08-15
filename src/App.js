import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import TopOfBook from './components/TopOfBook';
import PriceChart from './components/PriceChart';
import OrderBook from './components/OrderBook';

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';
// import Navbar from './components/Navbar';
// import Dropdown from './components/Dropdown';
// import TopOfBook from './components/TopOfBook';
// import PriceChart from './components/PriceChart';
// import OrderBook from './components/OrderBook';

const currencyPairs = ['BTC-USD', 'ETH-USD', 'LTC-USD', 'BCH-USD'];

function App() {
  const [currencyPair, setCurrencyPair] = useState('BTC-USD');
  const [topOfBook, setTopOfBook] = useState(null);
  const [priceData, setPriceData] = useState([]);
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const socket = io('wss://ws-feed.pro.coinbase.com', {
      transports: ['websocket'],
    });

    // Subscribe to channels
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
      socket.send(
        JSON.stringify({
          type: 'subscribe',
          product_ids: [currencyPair],
          channels: ['ticker', 'level2_batch'],
        })
      );
    });

    // Handle ticker updates
    socket.on('ticker', (data) => {
      console.log('Ticker Data:', data);
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
      }
    });

    // Handle level2_batch updates
    socket.on('level2_batch', (data) => {
      console.log('Level2 Batch Data:', data);
      if (data.type === 'snapshot' || data.type === 'l2update') {
        setOrderBook({
          bids: data.bids || [],
          asks: data.asks || [],
        });
      }
    });

    return () => socket.disconnect();
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

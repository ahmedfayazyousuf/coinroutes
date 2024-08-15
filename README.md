# Getting Started with CoinRoutes Test App by Ahmed Fayaz Yousuf

Date Project Started: 14 August 2024
Date Project Completed: 15 August 2024

## Steps:
1. run `npm i'
2. run `npm start'
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Task Goals:

1. You will be creating a simple trading view application where users can consume realtime information regarding the
cryptocurrencies they select. It will be composed of 3 main widgets:
1. Top of Book
2. Real Time Price Chart
3. Order book (Ladder)
STATUS: ACHIEVED


2. User inputs:
The UI should consist of a Drop-down where the user can select a number of currency pairs. For the purposes of
this example the currencies should be: BTC-USD, ETH-USD, LTC-USD, BCH-USD. These widgets should be
rendered on screen for each currency pair selected.
STATUS: ACHIEVED


3. Data sources
Please use the Coinbase API, we are expecting you to make use of the following channels:
1. ticker
2. level2_batch
STATUS: ACHIEVED


4. Data display:
As mentioned in the previous page, there should be 3 main widgets displaying data :
1. Top of Book
a. This widget should simply display the best bid and ask / quantity of the selected currency pair in real time (STATUS: ACHIEVED)
b. BONUS: display the spread and 24 hour volume (STATUS: ACHIEVED)
2. Real Time Price Chart
a. Use a charting library to display the current price of the chart (STATUS: ACHIEVED)
b. BONUS: display a historical chart for the selected pair (STATUS: ACHIEVED)
3. Order Book (Ladder)
a. Create a widget that displays an order book and handles real time updates. (STATUS: ACHIEVED)
b. BONUS: In crypto there are many more price levels than in other asset classes, so as a bonus allow
aggregating the prices by set price increments.Looking at the picture below (next page), you can see
that it would allow you to change the increment from 0.01 to 0.05, 0.10, etc... If the aggregation
was $0.10, you would add up the quantity of each increment and only display one price every $0.10 (STATUS: ACHIEVED)

5. General Bonuses:
1. Make the widgets configurable by the user (STATUS: ACHIEVED)
2. Deploy the application (STATUS: ACHIEVED)
import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinList from "./components/CoinList";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(userInput.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto Tracker</h1>
        <form>
          <input
            type="text"
            name="coin-input"
            placeholder="Search..."
            id="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return <CoinList key={coin.id} coinData={coin} />;
      })}
    </div>
  );
};

export default App;

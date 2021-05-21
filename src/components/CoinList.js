import React from "react";
import CoinItem from "./CoinItem";

const CoinList = ({ coinData }) => {
  return (
    <div>
      <CoinItem
        key={coinData.id}
        price={coinData.current_price}
        name={coinData.name}
        image={coinData.image}
        symbol={coinData.symbol}
        marketCap={coinData.market_cap}
        priceChange={coinData.price_change_percentage_24h}
      />
    </div>
  );
};

export default CoinList;

import React from "react";

const CoinItem = (props) => {
  return (
    <div className="coin-container">
    
      <div className="coin-row">
        <ul className="coin">
          <li id="coin-data-first">
            <h1 className="coin-name"> {props.name}</h1>{" "}
            <img src={props.image} alt={props.name} id="coin-image" />
          </li>
          <li>
            <p className="coin-symbol">{props.symbol}</p>
          </li>
          <li>
            <h4 className="coin-price">{props.price.toLocaleString()}</h4>
          </li>
          <li>
            <p className="coin-marketCap">{props.marketCap.toLocaleString()}</p>
          </li>

          {props.priceChange > 0 ? (
            <p className="coin-percent green">
              {props.priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent red">{props.priceChange.toFixed(2)}%</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CoinItem;

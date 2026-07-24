import React from "react";
import Counter from "./Counter";
import CurrencyConvertor from "./CurrencyConvertor";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>React Event Handling Examples</h1>

      <div className="counter">
        <Counter />
      </div>

      <hr />

      <div className="currency">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;

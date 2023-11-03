import React, { useState } from 'react';
import './App.css'; // Create a CSS file for styling

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <h1>Beautiful Counter App</h1>
      <div className="counter">
        <button onClick={decrement} className="decrement-button">
          -
        </button>
        <span className="count">{count}</span>
        <button onClick={increment} className="increment-button">
          +
        </button>
      </div>
    </div>
  );
}

export default CounterApp;

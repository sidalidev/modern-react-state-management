import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h3>{count}</h3>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;

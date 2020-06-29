import React from "react";
import "./Counter.css";
import { useCount } from "../contexts/count-context";

const Counter = () => {
  const { increment, decrement } = useCount();

  return (
    <div className="Counter">
      <button onClick={increment}>-</button>
      <button onClick={decrement}>+</button>
    </div>
  );
};

export default Counter;

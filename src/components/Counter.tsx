import React from "react";
import "./Counter.css";
import { useCount } from "../contexts/count-context";

const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <div className="Counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;

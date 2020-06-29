import React from "react";
import "./Counter.css";
import { useCountDispatch } from "../contexts/count-context";

const Counter = () => {
  const dispatch = useCountDispatch();

  return (
    <div className="Counter">
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
};

export default Counter;

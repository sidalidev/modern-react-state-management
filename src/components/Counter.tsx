import React from "react";
import "./Counter.css";

type Props = {
  onDecrementClick: () => void;
  onIncrementClick: () => void;
};

const Counter = ({ onDecrementClick, onIncrementClick }: Props) => {
  return (
    <div className="Counter">
      <button onClick={onDecrementClick}>-</button>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
};

export default Counter;

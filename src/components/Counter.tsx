import React from "react";
import "./Counter.css";
import { useRecoilState } from "recoil";
import { countState } from "../contexts/count-context";

const Counter = () => {
  const [count, setState] = useRecoilState(countState);

  return (
    <div className="Counter">
      <button onClick={() => setState(count - 1)}>-</button>
      <button onClick={() => setState(count + 1)}>+</button>
    </div>
  );
};

export default Counter;

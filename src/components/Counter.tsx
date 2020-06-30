import React, { memo } from "react";
import "./Counter.css";
import { useRecoilState } from "recoil";
import { countState } from "../contexts/count-context";

const Counter = memo(() => {
  const [count, setState] = useRecoilState(countState);

  return (
    <div className="Counter">
      <button onClick={() => setState(count - 1)}>-</button>
      <button onClick={() => setState(count + 1)}>+</button>
    </div>
  );
});

export default Counter;

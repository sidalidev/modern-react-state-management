import React from "react";
import { useCount } from "../contexts/count-context";

const Counter = () => {
  const [count] = useCount();

  return <h3>{count}</h3>;
};

export default Counter;

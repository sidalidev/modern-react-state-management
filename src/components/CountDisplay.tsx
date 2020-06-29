import React from "react";
import { useCount } from "../contexts/count-context";

const CountDisplay = () => {
  const { state } = useCount();

  return <h3>{state.count}</h3>;
};

export default CountDisplay;

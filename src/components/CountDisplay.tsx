import React from "react";
import { useCountState } from "../contexts/count-context";

const CountDisplay = () => {
  const { count } = useCountState();

  return <h3>{count}</h3>;
};

export default CountDisplay;

import React from "react";
import { useCount } from "../contexts/count-context";

const CountDisplay = () => {
  const {
    state: { count },
  } = useCount();

  return <h3>{count}</h3>;
};

export default CountDisplay;

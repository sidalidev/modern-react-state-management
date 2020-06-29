import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "../contexts/count-context";

const CountDisplay = () => {
  const [count] = useRecoilState(countState);

  return <h3>{count}</h3>;
};

export default CountDisplay;

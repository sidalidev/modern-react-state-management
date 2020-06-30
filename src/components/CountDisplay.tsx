import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState, doubleCountState } from "../contexts/count-context";

const CountDisplay = () => {
  const [count] = useRecoilState(countState);
  const doubledCount = useRecoilValue(doubleCountState);

  return (
    <h3>
      {count} * 2 = {doubledCount}
    </h3>
  );
};

export default CountDisplay;

import React from "react";
import { useRecoilValue } from "recoil";
import { doubleCountState } from "../contexts/count-context";

const Double = () => {
  const doubledCount = useRecoilValue(doubleCountState);

  return <span>{doubledCount}</span>;
};

const CountDisplay = () => {
  return (
    <h3>
      Double = <Double />
    </h3>
  );
};

export default CountDisplay;

import React, { memo } from "react";
import { useCountState } from "../contexts/count-context";

const Double = memo(() => {
  const { count } = useCountState();
  const doubledCount = count;

  return <span>{doubledCount}</span>;
});

const CountDisplay = memo(() => {
  return (
    <h3>
      Double = <Double />
    </h3>
  );
});

export default CountDisplay;

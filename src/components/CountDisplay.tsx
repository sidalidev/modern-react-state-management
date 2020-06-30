import React, { Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState, doubleCountState } from "../contexts/count-context";

const CountDouble = () => {
  const doubledCount = useRecoilValue(doubleCountState);

  return <>{doubledCount}</>;
};

const CountDisplay = () => {
  const [count] = useRecoilState(countState);

  return (
    <h3>
      {count} * 2 ={" "}
      <Suspense fallback={<>Loading…</>}>
        <CountDouble />
      </Suspense>
    </h3>
  );
};

export default CountDisplay;

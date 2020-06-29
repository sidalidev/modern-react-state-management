import React from "react";

type Props = {
  count: number;
};

const Counter = ({ count = 0 }: Props) => {
  return <h3>{count}</h3>;
};

export default Counter;

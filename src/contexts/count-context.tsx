import React from "react";

const CountContext = React.createContext<any>(undefined);

// Bonus: more simple less boilerplate for consumers with Hooks
function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

function CountProvider(props: any) {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}

export { useCount, CountProvider };

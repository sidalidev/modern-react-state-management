import React, { useReducer } from "react";

const CountContext = React.createContext<any>(undefined);

// Bonus: more simple less boilerplate for consumers with Hooks
function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return {
    state,
    dispatch, // Access to lower level API
    increment,
    decrement,
  };
}

function countReducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };
  }
}

function CountProvider(props: any) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <CountContext.Provider value={value} {...props} />;
}

export { useCount, CountProvider };

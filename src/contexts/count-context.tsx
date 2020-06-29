import React from "react";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type CountProviderProps = { children: React.ReactNode };

const CountStateContext = React.createContext<State | undefined>(undefined);
const CountDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action`);
    }
  }
}

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

function useCountState() {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}

function useCountDispatch() {
  const context = React.useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
}

function useCount() {
  const dispatch = useCountDispatch();
  const state = useCountState();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return { state, dispatch, increment, decrement };
}

export { CountProvider, useCountState, useCountDispatch, useCount };

import React, { useState } from "react";
import "./App.css";
import CountDisplay from "./components/CountDisplay";
import Counter from "./components/Counter";

function App() {
  // Lifting State Up
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <CountDisplay count={count} />
        <Counter
          onIncrementClick={() => setCount(count + 1)}
          onDecrementClick={() => setCount(count - 1)}
        />
      </header>
    </div>
  );
}

export default App;

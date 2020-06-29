import React from "react";
import "./App.css";
import CountDisplay from "./components/CountDisplay";
import Counter from "./components/Counter";
import { CountProvider } from "./contexts/count-context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountProvider>
          <CountDisplay />
          <Counter />
        </CountProvider>
      </header>
    </div>
  );
}

export default App;

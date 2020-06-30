import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import CountDisplay from "./components/CountDisplay";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <Suspense fallback={<h3>Loading…</h3>}>
            <CountDisplay />
          </Suspense>
          <Counter />
        </RecoilRoot>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Counter } from "./component/Counter/Counter";
import { CounterSettings } from "./component/CounterSettings/CounterSettings";

function App() {

  return (
    <div className="CounterWrapper">
          <CounterSettings/>
          <Counter/>
    </div>
)}

export default App;


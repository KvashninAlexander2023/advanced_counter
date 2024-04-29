import React from "react";
import "../../App.css";
import { useState } from "react";
import { Button } from "../../component/Button/Button";
// import s from "./component/Counter.module.css";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const minValue = 0;
  const maxValue = 5;

  const incrementCount = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const resetCount = () => {
    setCount(minValue);
  };


  const countStyle = {
    color: count === maxValue ? "red" : "black",
  };

  return (
    <div className="App">
      <div>
        <div className="count">
          {count === maxValue ? (
            <h2 style={countStyle}>Total</h2>) : (<h2>Counter</h2>)}
          <p style={countStyle}>{count}</p>
        </div>
        <div className="buttonGroup">
          <Button
            title="inc"
            callback={incrementCount}
            disabled={count === maxValue ? true : false}
          />
          <Button
            title="reset"
            callback={resetCount}
            disabled={count === minValue ? true : false}
          />
        </div>
      </div>
    </div>
  );
}



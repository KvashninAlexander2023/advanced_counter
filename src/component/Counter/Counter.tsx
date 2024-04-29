import React from "react";
import "../../App.css";
import { useState } from "react";
import { Button } from "../../component/Button/Button";
// import s from "./component/Counter.module.css";



type minMaxValueType =  {
  minValue: number
  maxValue: number
}

type CounterPropsType = {
  changeData:boolean
  stateError: boolean
  minMaxValue : minMaxValueType
}

export function Counter(props:CounterPropsType) {

  const minValue = props.minMaxValue.minValue
  const maxValue = props.minMaxValue.maxValue
  
  const [count, setCount] = useState<number>(props.minMaxValue.minValue);


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
          {/* {count === maxValue ? (
            <h2 >Total</h2>) : (<h2>Counter</h2>)} */}
         {props.stateError ? <p className="error">Incorrect value!</p> :props.changeData ? <p>Enter values and press "set"</p> :<p style={countStyle}>{count}</p>}
        </div>
        <div className="buttonGroup">
          <Button
            title="inc"
            callback={incrementCount}
            disabled={count === maxValue || props.changeData}
          />
          <Button
            title="reset"
            callback={resetCount}
            disabled={count === minValue || props.changeData}
          />
        </div>
      </div>
    </div>
  );
}



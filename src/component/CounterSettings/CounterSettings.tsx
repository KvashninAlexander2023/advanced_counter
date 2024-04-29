import React from "react";
import "../../App.css";
import { useState } from "react";
import { Button } from "../Button/Button";
import SettingsField from "../SettingsField/SettingsField";
// import s from "./component/Counter.module.css";

export function CounterSettings() {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  // console.log(maxValue);
  // console.log(startValue);
  
  let errorValue = startValue > maxValue || startValue < 0  || maxValue < 0
 
  // const minValue = 0;
  // const maxValue = 5;

  // const incrementCount = () => {
  //   if (count < maxValue) {
  //     setCount(count + 1);
  //   }
  // };

  // const resetCount = () => {
  //   setCount(minValue);
  // };

  // const countStyle = {
  //   color: count === maxValue ? "red" : "black",
  // };

  
  const setCount = () => {}



  return (
    <div className="App">
      <div>
        <div className="count">
          <div> 
            <SettingsField callback={setMaxValue} value={maxValue} title="max value:" errorValue={errorValue}/>
            <SettingsField callback={setStartValue} value={startValue} title="start value:" errorValue={errorValue}/>
          </div>
         
        </div>
        <div className="buttonGroup">
          <Button
            title="set"
            callback={setCount}
            disabled={errorValue}
          />
        </div>
      </div>
    </div>
  );
}



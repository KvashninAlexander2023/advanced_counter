import React, { useEffect } from "react";
// import "../../App.css";
import s from "./Counter.module.css";
import { useState } from "react";
import { Button } from "../Button/Button";
// import s from "./component/Counter.module.css";



export type minMaxValueType =  {
  minValue: number
  maxValue: number
}

type CounterPropsType = {

  stateError: boolean
  minMaxValue : minMaxValueType
  changeShowCountSetting:()=>void
}

export function ShowCounter_2(props:CounterPropsType) {

  const minValue = props.minMaxValue.minValue
  const maxValue = props.minMaxValue.maxValue
  
  const [count, setCount] = useState<number>(minValue);

  useEffect(()=>{
    setCount(minValue)
  },[minValue])

  const incrementCount = () => {
    if (count < maxValue) {
      setCount(()=>count + 1);
    }
  };

  const resetCount = () => {
    setCount(minValue);
  };

  const changeShowCountSettingHandler = () => {
    props.changeShowCountSetting()
  };

  const countStyle: string = count === maxValue ? "finish" : ""

  return (
    <div className={s.app}>
        <div className={s.count}>
          {/* {count === maxValue ? (
            <h2 >Total</h2>) : (<h2>Counter</h2>)} */}
         {/* {props.stateError ? <p className={s.error}>Incorrect value!</p> : props.changeData ? <p className={s.message}>Enter values and press "set"</p> : */}
         <p className={`${s.number} ${s[countStyle]}`}>{count}</p>
          {/* } */}
        </div>
        <div className={s.buttonGroup}>
          <Button
            title="inc"
            callback={incrementCount}
            disabled={count === maxValue}
          />
          <Button
            title="reset"
            callback={resetCount}
            disabled={count === minValue}
          />
          <Button
            title="set"
            callback={changeShowCountSettingHandler}
          />
        </div>
    </div>
  );
}



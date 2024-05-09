import React from "react";
import s from "./CounterSettings.module.css"
import { useState } from "react";
import { Button } from "../Button/Button";
import SettingsField from "../SettingsField/SettingsField";
import { minMaxValueType } from "../Counter/Counter";
// import s from "./component/Counter.module.css";



type CounterSettingsPropsType = {
  minMaxValue: minMaxValueType
  changeData: boolean
  setMinMaxValue: (a: number, b: number) => void
  setChangeData: (e: boolean) => void
  setStateError: (e: boolean) => void

}



export function CounterSettings(props: CounterSettingsPropsType) {
  const [maxValue, setMaxValue] = useState<number>(props.minMaxValue.maxValue);
  const [startValue, setStartValue] = useState<number>(props.minMaxValue.minValue);

  let errorValue = false

  if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
    errorValue = true
    props.setStateError(true)
  } else { props.setStateError(false) }

  const ChangeValueOfMaxValue = (e: number) => {
    setMaxValue(e)
    props.setChangeData(true)
  }
  const ChangeValueOfStartValue = (e: number) => {
    setStartValue(e)
    props.setChangeData(true)
  }

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


  const setCount = () => {
    props.setChangeData(false)
    props.setMinMaxValue(maxValue, startValue)
  }



  return (
    <div className={s.app}>
        <div className={s.settings}>
            <SettingsField callback={ChangeValueOfMaxValue} value={maxValue} title="max value:" errorValue={errorValue} />
            <SettingsField callback={ChangeValueOfStartValue} value={startValue} title="start value:" errorValue={errorValue} />
        </div>
        <div className={s.buttonGroup}>
          <Button
            title="set"
            callback={setCount}
            disabled={errorValue || !props.changeData}
          />
        </div>
      
    </div>
  );
}



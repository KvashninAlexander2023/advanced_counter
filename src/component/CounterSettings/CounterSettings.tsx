import React from "react";
import "../../App.css";
import { useState } from "react";
import { Button } from "../Button/Button";
import SettingsField from "../SettingsField/SettingsField";
// import s from "./component/Counter.module.css";


// type minMaxValueType =  {
//   minValue: number
//   maxValue: number
// }

type CounterSettingsPropsType = {
  changeData:boolean
  setMinMaxValue: (a:number,b:number)=>void
  setChangeData: (e:boolean)=>void
  setStateError: (e:boolean)=>void

}



export function CounterSettings(props:CounterSettingsPropsType) {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  // console.log(maxValue);
  // console.log(startValue);
  
  // let errorValue = startValue >= maxValue || startValue < 0  || maxValue < 0
  let errorValue = false
  
  if(startValue >= maxValue || startValue < 0  || maxValue < 0){
    errorValue = true
    props.setStateError(true)
  } else {props.setStateError(false)}

  const ChangeValueOfMaxValue = (e:number) => {
    setMaxValue(e)
    props.setChangeData(true)
  }
  const ChangeValueOfStartValue = (e:number) => {
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
    props.setMinMaxValue(maxValue,startValue)
  }



  return (
    <div className="App">
      <div>
        <div className="count">
          <div> 
            <SettingsField callback={ChangeValueOfMaxValue} value={maxValue} title="max value:" errorValue={errorValue}/>
            <SettingsField callback={ChangeValueOfStartValue} value={startValue} title="start value:" errorValue={errorValue}/>
          </div>
         
        </div>
        <div className="buttonGroup">
          <Button
            title="set"
            callback={setCount}
            disabled={errorValue || !props.changeData}
          />
        </div>
      </div>
    </div>
  );
}



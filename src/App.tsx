import React, { useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter/Counter";
import { CounterSettings } from "./component/CounterSettings/CounterSettings";

function App() {

  const minMaxValue = {
    maxValue: 10,
    minValue: 1,
  };

  // состояние когда вводим данные
  const [changeData, setChangeData] = useState<boolean>(false);
  // console.log("статус changeData:", changeData);

  // состояние ошибки
  const [stateError, setStateError] = useState<boolean>(false);
  // console.log("статус stateError:", stateError);


  //текущее состояние введенных значений после нажатия кнопки set
  const [val, setVal] = useState(minMaxValue);



  // const setMinMaxValue = (maxValue: number, minValue: number) => {
  //   minMaxValue.maxValue = maxValue;
  //   minMaxValue.minValue = minValue;
  //   console.log("тут", maxValue, minValue);
  //   console.log(minMaxValue);
  // };
  function setMinMaxValue(maxValue: number, minValue: number) {
    // console.log("minMax", maxValue, minValue);
    setVal((val) => ({ ...val,maxValue: maxValue, minValue: minValue }));
   
    // setVal(()=>({...val}))
    // setCount(val.minValue)
    // minMaxValue.maxValue = maxValue;
    // minMaxValue.minValue = minValue;
    // console.log("тут", maxValue, minValue);
    // console.log(val);
  }

  

  // const [count, setCount] = useState<number>(minMaxValue.minValue);
  
  // console.log(count);


// const inc = () => {
//   setVal({...val, count: val.count + 1 })
// }

  // const testFunction = (filedName: "minValue" | "maxValue", value: number) => {
  //   const newVal = { ...val };
  //   newVal[filedName] = value;  // решение с тех.поддержки
  //   setVal(newVal);
  // };

  // console.log('minMax-result', val);

  return (
    <div className="CounterWrapper">
      <CounterSettings
        minMaxValue={val}
        changeData={changeData}
        setChangeData={setChangeData}
        setStateError={setStateError}
        setMinMaxValue={setMinMaxValue}
      />
      <Counter changeData={changeData}  minMaxValue={val} stateError={stateError}/>
    </div>
  );
}

export default App;

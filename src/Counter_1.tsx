import React, { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter/Counter";
import { CounterSettings } from "./component/CounterSettings/CounterSettings";

function Counter_1() {

  const minMaxValue:stateType = {
    maxValue: 10,
    minValue: 1,
  };


  type stateType = {
    maxValue: number
    minValue: number
  }
  // состояние когда вводим данные
  const [changeData, setChangeData] = useState<boolean>(false);

  // состояние ошибки
  const [stateError, setStateError] = useState<boolean>(false);

  
  //текущее состояние введенных значений после нажатия кнопки set
  const [value, setValue] = useState<stateType>(getLocalStorageNumber("minMaxValue"));

  //функция которая проверяет есть ли значение в localStorage, если нет берет начальное значение, если есть берет из localStorage
  function getLocalStorageNumber(value:string):stateType{
    const storedValue = localStorage.getItem(value);
    return storedValue ? JSON.parse(storedValue) : minMaxValue;
};


  useEffect(()=>{
    localStorage.setItem("minMaxValue", JSON.stringify(value))
  },[value])


  function setMinMaxValue(maxValue: number, minValue: number) {
    setValue((val) => ({ ...val,maxValue, minValue }));
    
   
  }

  return (
    <div className="CounterWrapper">
      <CounterSettings
        minMaxValue={value}
        changeData={changeData}
        setChangeData={setChangeData}
        setStateError={setStateError}
        setMinMaxValue={setMinMaxValue}
      />
      <Counter changeData={changeData}  minMaxValue={value} stateError={stateError}/>
    </div>
  );
}

export default Counter_1;

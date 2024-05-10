import React, { useEffect, useState } from "react";
import "./App.css";
import { ShowCounter_2 } from "./component/Counter/ShowCounter_2";
import { CounterSettings_2 } from "./component/CounterSettings/CounterSettings_2";

function Counter_2() {

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


  // состояние показать или нет настройки
  const [showSettings, setShowSettings] = useState<boolean>(false);

  
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
    setShowSettings(false)
  }

  const changeShowCountSetting = ()=>{
    setShowSettings(true)
  }


  return (
    <div className="CounterWrapper">
      {showSettings ?  <CounterSettings_2
        minMaxValue={value}
        setChangeData={setChangeData}
        setStateError={setStateError}
        setMinMaxValue={setMinMaxValue}
      /> :   <ShowCounter_2 changeShowCountSetting={changeShowCountSetting} minMaxValue={value} stateError={stateError}/>}
    </div>
  );
}

export default Counter_2;

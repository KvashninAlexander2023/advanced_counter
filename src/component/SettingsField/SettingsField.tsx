
import React, { ChangeEvent } from 'react'
import s from "./SettingsField.module.css"

type SettingsFieldPropsType = {
  title:string
  callback: (e:number)=>void
  value: number
  errorValue: boolean
} 


function SettingsField (props: SettingsFieldPropsType) {

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.callback(+e.currentTarget.value)
    // console.log(e.currentTarget.value);
    
  }



  return (
    <div className={s.set}>
        <div>{props.title}</div>
        <input type="number" onChange={onChangeHandler} value={props.value} className={props.errorValue ? s.error :  s.input}/>
    </div>
    
  )}

export default SettingsField
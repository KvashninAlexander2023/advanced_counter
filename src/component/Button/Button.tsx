import React, { ButtonHTMLAttributes } from "react";
import s from "./Button.module.css"


type ButtonType= {
  title: string
  callback: ()=>void
}& ButtonHTMLAttributes<HTMLButtonElement>

export function Button({title, callback, disabled}:ButtonType){



 

  return (

    <button onClick={callback} disabled={disabled} className={disabled ? s.colorText : `${s.colorText} ${s.dis}` }>{title}</button>

  )



}
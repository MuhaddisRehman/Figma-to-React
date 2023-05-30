import React,{FC} from 'react'
import './button.css'
import { buttonProps } from './_models'



const BaseButton:FC<buttonProps> = (props) => {
  return (
    <a href="#!"className={`${props.variant}`}>{props.title}</a>
  )
}

export default BaseButton
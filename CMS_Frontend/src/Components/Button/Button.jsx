import React from 'react'
import './Button.css'
const Button = (props) => {
    // const title = props.title 
    const {title,subTitle} = props
  return (
    <div>
        <button>{title}</button>
        {/* <button style={{width:'100px',height:'100px'}}>{props.title}</button> */}
    </div>
  )
}

export default Button
import React from 'react'

const Button = (props) => {
    // const title = props.title 
    const {title,subTitle} = props
  return (
    <div>
        <button style={{width:'100px',height:'100px'}}>{title}+{subTitle}</button>
        {/* <button style={{width:'100px',height:'100px'}}>{props.title}</button> */}
    </div>
  )
}

export default Button
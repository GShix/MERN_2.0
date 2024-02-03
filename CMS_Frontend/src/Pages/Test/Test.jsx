import React, { useState } from 'react'

const Test = () => {
    const [count, setCount]=useState(0);
    // function countIncrease() {
    //     setCount(count +1);
    // }
    // function countDecrease() {
    //     setCount(count -1);
    // }
    const  countIncrease=()=> {
        setCount(count +1);
    }
    function countDecrease() {
        setCount(count -1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={countIncrease} style={{margin:"10px"}}>+</button>
        <button onClick={countDecrease}>-</button>

    </div>
  )
}

export default Test
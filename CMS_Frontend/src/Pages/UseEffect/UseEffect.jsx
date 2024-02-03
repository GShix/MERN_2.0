import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [decrease, setDecrease] = useState(0);
    useEffect(()=>{
        document.title = count;
        console.log("I am hitted")
        // setCount(count+1)
    },[count,decrease])

    const IncCount = ()=>{
        setCount(count+1)
    }

    const DecCount =()=>{
      setDecrease(decrease-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={IncCount}>+</button>

        <h1>{decrease}</h1>

        <button onClick={DecCount}>-</button>

    </div>
  )
}

export default UseEffect
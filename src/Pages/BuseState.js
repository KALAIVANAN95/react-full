import React, { useState } from 'react'

const BuseState = () => {

  const [count,setCount]=useState(0)

  const increment =()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    if(count>0){
      setCount(count-1)
      
    }
    else{
      alert("dfd")
    } 
  }

  return (
    <>
    <h1>UseState Example one</h1>
    <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>
    <br/>
    <br/>

    <p></p>
    <hr/>
    </>
  )
}

export default BuseState
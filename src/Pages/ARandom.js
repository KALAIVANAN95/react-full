import React from 'react'

const ARandom = ()=>{

  const handleChangeNames =()=>{
    const array1 = ["KALAI","VANAN","CENA","JOHN"]
    const numbers = Math.floor(Math.random()*4)

    return array1[numbers]
  }

  const year = new Date()


  const headerStyle = {
    backgroundColor:"mediumblue",
    color:"white"
  }


  const handleClick =(name)=>{
    alert(`Welcome to hello world ${name}`)
  }

  const handleClicks = (e)=>{
    alert(e.target.innerText)
    console.log(e.target)
  }
  return(
    <>
    <h3 style={headerStyle}>This is first code.</h3>
    <p>My Name is {handleChangeNames()}</p>
   
    <button onClick={()=>handleClick('KALAI')}>Click</button>
    <button onClick={(e)=>handleClicks(e)}>Clicks</button>
    <hr />
    </>
  )
}

export default ARandom;
import React, { useState } from 'react'

const Cusetate = ()=>{

    const [name,setName]=useState("Earn")

    const handleClickname = ()=>{
        const names = ["Earn","Grow","Give"];
        const init =Math.floor(Math.random()*3)
        setName(names[init])
    }

    return(
        <>
        
        <main>
            <h3>useState Random Value Gen Example</h3>
            <p>Let's {name} Money</p>
            <button onClick={handleClickname}>Click Me</button>
            <br/>
            <br/>
            <hr/>
        </main>
        
        
        </>
    )
}


export default Cusetate;
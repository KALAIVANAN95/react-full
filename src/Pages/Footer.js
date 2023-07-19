import React from 'react'

const Footer = ({length})=>{
  const year = new Date()

  return(
    <>
   <footer>
    <h6>You have {length} list {length===1 ? "item":"items"} </h6>
    <p>Copy &copy; {year.getFullYear()}</p>
    
    <hr />
    </footer>
    </>
  )
}

export default Footer;
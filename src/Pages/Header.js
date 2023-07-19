import React from 'react'

const Header = ({title,width}) => {
  return (
    <header>
        <h1>{title}</h1>
        {
         width < 768 ? "aaaa" : width<992? "bbbb":"CCC"  
        }
    </header>
  )
}

Header.defaultProps = {
    title:"This is React js full course revision"
}
export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Postpage = () => {
  return (
    <>
    <div>Postpage</div>
    <Link to="/post-page/1">Post 1</Link>
    <Link to="/post-page/2">Post 2</Link>
    <Link to="/post-page/3">Post 3</Link>
    </>
  )
}

export default Postpage
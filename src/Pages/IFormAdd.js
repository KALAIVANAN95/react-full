import React, { useRef } from 'react'


const IFormAdd = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef = useRef();

  return (
    <>    <form action="" className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input type='text'
        ref={inputRef}
        placeholder='Add Item' name='newItem' value={newItem} required id='addItem' autoFocus onChange={(e)=>setNewItem(e.target.value)}/>
        <button type='submit' aria-label='Add Item' 
        onClick={()=>inputRef.current.focus()}
        
        >Add+</button>
    </form>
    <br/>
    <br/>
    <hr />
    </>

  )
}

export default IFormAdd
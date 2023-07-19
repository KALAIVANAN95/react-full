import React from 'react'

const GPropsLineItems = ({item,handleCheck,handleDelete}) => {
  console.log(item);
  return (
    <>
    <li key={item.id} className="item">
    <input type="checkbox" checked={item.checked}
    onChange={()=>handleCheck(item.id)}
    />
    <label style={(item.checked)? {textDecoration:"line-through"}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
</li>

</>
  )
}

export default GPropsLineItems
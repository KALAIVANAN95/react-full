import React, { useState } from "react";

const DList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "Pratice Coding",
      checked: true,
    },
    {
      id: 2,
      item: "Play Cricket",
      checked: false,
    },
    {
      id: 3,
      item: "Eat Food",
      checked: false,
    },
  ]);


  const handleCheck = (id)=>{
    console.log(`id:${id}`)
    const litstItems = items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)

    setItems(litstItems)
  }

  const handleDelete = (id)=>{
    console.log(`ids:${id}`)
    const listdelete = items.filter((item)=>item.id !== id)
    setItems(listdelete)
  }
  return (
    <>
      <h3>List and Keys</h3>
      {
        (items.length > 0) ? (<ul>
            {
                items.map((item,id)=>{
                    return(
                        <li key={id} className="item">
                            <input type="checkbox" checked={item.checked}
                            onChange={()=>handleCheck(item.id)}
                            />
                            <label style={(item.checked)? {textDecoration:"line-through"}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        </li>
                    )
                })
            }
          </ul>):(
            <p>Your list is empty</p>
          )
      }
      
      <br/>
      <br/>
      <hr/>
    </>
  );
};

export default DList;

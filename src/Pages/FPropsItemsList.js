import React from 'react'
import GPropsLineItems from './GPropsLineItems'

const FPropsItemsList = ({items,handleCheck,handleDelete}) => {
  console.log(items);
  return (
    <>
    <ul>
            {
               items?.map((item)=>{
                    return(
                       <GPropsLineItems 
                       key={item.id}
                       item={item}
                       handleCheck={handleCheck}
                       handleDelete={handleDelete}
                       />
                    )
                })
            }
          </ul>
        
          </>
  )
}

export default FPropsItemsList
import React from "react";
import FPropsItemsList from "./FPropsItemsList";

const EProps = ({items,handleCheck,handleDelete}) => {
  

  console.log(items,"dfdfddffd");
  return (
    <>
      <h3>Props & Props Drilling</h3>
      {
        (items?.length > 0) ? (
       
            <FPropsItemsList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
          
          
          ):(
            <p>Your list is empty</p>
          )
      }
      
      <br/>
      <br/>
      <hr/>
    </>
  );
};

export default EProps;

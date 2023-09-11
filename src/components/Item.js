import React, { useState } from "react";

function Item({ name, category }) {
  const[item ,setItem]=useState(false);
  function itemHandel(){

setItem((item) => !item)
//const NewClss ={item ? "in-cart" : ""}
  }
  return (
    <li className={item ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={item?"remove":"add"} onClick={itemHandel}>{item?'Remove From Cart':'Add to Cart'}</button>

    </li>
  );
}

export default Item;

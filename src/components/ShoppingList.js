import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory ,setSelect]= useState('ALL');
  function handelSelect(e){
setSelect(e.target.value);
  }
  const selectedItems = selectedCategory=='ALL'?  items : items.filter(item => item.category === selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  onChange={handelSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

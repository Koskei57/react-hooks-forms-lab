import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// const newItem = {
//     id: uuid(), 
//     name: itemName,
//     category: itemCategory,
//   };
function ItemForm(onItemFormSubmit) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  
  function handleNameChange(e) {
    setName( e.target.value);
  }
  
  function addElement(event) {
    setCategory( event.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name, category,
    });
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={addElement} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

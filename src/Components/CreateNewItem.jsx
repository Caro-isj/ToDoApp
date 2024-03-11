import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateNewItem = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const nav = useNavigate();

  const handleCreateItem = (event) => {
    event.preventDefault();
  
    // Generate a unique ID for the new item
    const newItem = { id: Date.now(), task, completed };
  
    // Update the state with the new item and navigate after the state has been updated
    setItems([...items,newItem]);
      
      // Redirect to the details page of the newly created item
      // nav(`/itemdetail/${newItem.id}`);
      
      // return updatedItems;
      nav("/");
   
  };
  return (
    <div>
      <h2>Create New Item</h2>
      <form className="item-form" onSubmit={handleCreateItem}>
        <label>
          Task:
          <input
            name="task"
            placeholder="task"
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
        </label>
        <label>
          Completed
          <input
            name="completed"
            placeholder="completed"
            type="checkbox"
            checked={completed}
            onChange={(event) => {
              setCompleted(event.target.checked);
            }}
          />
        </label>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};
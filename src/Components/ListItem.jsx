import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, onDelete, allItems, setItems }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const [completed, setCompleted] = useState(false);

  //check the item that we want to update
  function handleUpdateTasks(id) {
    const mappedItems = allItems.map((currentItem) => {
      if (currentItem.id == id) {
        if (currentItem.completed == true) {
          setCompleted(false);
        } else {
          setCompleted(true);
        }
        const updateItem = {
          task: currentItem.task,
          completed: completed,
          id: currentItem.id,
        };
        return updateItem;
      } else {
        return currentItem;
      }
    });
    setItems(mappedItems);
  }

  return (
    <li className="item-card">
      <Link to={`/itemdetail/${item.id}`}>{item.task}</Link>
      {item.completed ? " ✔️" : " ❌"}
      <button onClick={handleDelete}>Delete</button>
      <label>
        Completed
        <input
          name="completed"
          type="checkbox"
          checked={item.completed}
          onChange={(event) => {
            event.preventDefault();
            setCompleted(event.target.checked);

            handleUpdateTasks(item.id);
          }}
        />
      </label>
    </li>
  );
};

export default ListItem;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const [completed, setCompleted] = useState(false);

  return (
    <li className="item-card">
      <Link to={`/itemdetail/${item.id}`}>{item.task}</Link>
      {completed ? " ✔️" : " ❌"}
      <button onClick={handleDelete}>Delete</button>
      <label>
        Completed
        <input
          name="completed"
          type="checkbox"
          checked={completed}
          onChange={(event) => {
            setCompleted(event.target.checked);
          }}
        />
      </label>
    </li>
  );
};

export default ListItem;

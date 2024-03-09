import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CreateNewItem } from "./CreateNewItem";

const ListItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const [completed, setCompleted] = useState(false);

  return (
    <li className="item-card">
      {item.task} {item.completed === true ? "✔️" : "❌"}
      <button onClick={handleDelete}> Delete</button>
      <button>
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
      </button>
    </li>
  );
};
export default ListItem;

//<Link> </Link> link each item to items details page!!
//check for completed to work with checkmark

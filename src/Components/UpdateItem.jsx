import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UpdateItem = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const { itemId } = useParams();

  // useEffect(() => {
  //   const foundItem = items.find((oneItem) => oneItem.id === itemId);
  //   setTask(foundItem ? foundItem.task : "");
  //   setCompleted(foundItem ? foundItem.completed : false);
  // }, [items, itemId]);

  // const handleUpdateItem = (event) => {
  //   event.preventDefault();

  //   const mappedItems = items.map((item) => {
  //     if (item.id === itemId) {
  //       const updatedItem = { task, completed: !item.completed, id: item.id };
  //       return updatedItem;
  //     } else {
  //       return item;
  //     }
  //   });

  //   setItems(mappedItems);
  //   navigate("/");
  // };

  return (
    <div class="content-page">
      <h2>Update Item</h2>
      {/* <Link to="/dashboard">Dashboard</Link>
      <form className="item-form" onSubmit={handleUpdateItem}>
        <label htmlFor="task">
          Task:
          <input
            id="task"
            name="task"
            placeholder="Task"
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </label>
        <label htmlFor="completed">
          Completed
          <input
            id="completed"
            name="completed"
            type="checkbox"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
          />
        </label>
        <button type="submit">Update</button>
      </form> */}
    </div>
  );
};

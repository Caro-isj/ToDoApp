import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateNewItem = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const nav = useNavigate();

  const handleCreateItem = (event) => {
    event.preventDefault();

    const newItem = { id: Date.now(), task, completed };

    setItems([...items, newItem]);

    nav("/");
  };
  return (
    <div className="content-page">
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

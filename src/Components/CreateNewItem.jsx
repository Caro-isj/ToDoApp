import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const CreateNewItem = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const nav = useNavigate();

  const handleCreateItem = (event) => {
    event.preventDefault();
    const newItem = { task, completed };

    setItems([...items, newItem]);

    nav("/");
  };
  return (
    <div>
      <h2> CreateNewItem</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

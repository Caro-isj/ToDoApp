import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UpdateItem = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState();
  const nav = useNavigate();
  const { petId } = useParams();

  useEffect(() => {
    const foundItem = items.find((oneItem) => {
      if (oneItem.id == itemId) {
        return true;
      }
    });
    console.log("here is the found item", foundItem);
    setTask(foundItem.name);
    setCompleted(foundItem.owner);
  }, []);

  const handleUpdateItem = (event) => {
    event.preventDefault();

    //this maps over all the pets and updates only the one whos id matches the params id from above
    const mappedItems = items.map((item) => {
      if (item.id == itemId) {
        const updatedItem = { task, completed, id: item.id };
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(mappedItems);
    nav("/");
  };
  return (
    <div>
      <h2> Update Item</h2>
      <Link to="/dashboard">Dashboard </Link>
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
            type="boolean"
            value={completed}
            onChange={(event) => {
              setCompleted(event.target.value);
            }}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

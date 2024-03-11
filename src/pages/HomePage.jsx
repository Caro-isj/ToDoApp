import React from "react";
import List from "../components/List";
import { Link } from "react-router-dom";

const HomePage = ({ items,setItems, onDelete }) => {
  if (!items) {
    return <p>Loading...</p>; // or any other fallback UI
  }

  return (
    <div>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <>
        <Link to="/create-item">
          <button>Add a new task</button>
        </Link>
        <Link to="/update-item">
          <button>Update a task</button>
        </Link>
          {items.map((item) => (
            
          <List items={items} item={item} key={item.id} setItems={setItems} onDelete={onDelete}/>
              
            
          ))}
          </>
      )}
    </div>
  );
};

export default HomePage;
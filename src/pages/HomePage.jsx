import React from "react";
import List from "../components/List";

const HomePage = ({ items, setItems, onDelete }) => {
  if (!items) {
    return <p>Loading...</p>; // or any other fallback UI
  }

  return (
    <>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <div className="home-content">
          {items.map((item) => (
            <List
              allItems={items}
              item={item}
              key={item.id}
              setItems={setItems}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;

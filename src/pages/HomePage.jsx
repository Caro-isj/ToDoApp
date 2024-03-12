import React from "react";
import List from "../components/List";

const HomePage = ({ items, setItems, onDelete }) => {
  if (!items) {
    return <p>Loading...</p>; // or any other fallback UI
  }

  return (
    <div>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <>
          {items.map((item) => (
            <List
              items={items}
              item={item}
              key={item.id}
              setItems={setItems}
              onDelete={onDelete}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default HomePage;

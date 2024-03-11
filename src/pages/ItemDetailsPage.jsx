import React from "react";

export const ItemDetailsPage = ({ item }) => {
  return (
    <div>
      <h2>Item Details Page</h2>
      {item ? (
        <div>
          <h3>{item.title}</h3>
          <p>Description: {item.description}</p>
          <p>Due Date: {item.dueDate}</p>
          {/* Add more details based on your item structure */}
        </div>
      ) : (
        <p>No item details available</p>
      )}
    </div>
  );
};
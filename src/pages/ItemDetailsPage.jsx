import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetailsPage = ({ item }) => {
  //const [items, setItems] = useState(Tasks);
  // const [completed, setCompleted] = useState(false);
  // const {} = useParams()

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

export default ItemDetailsPage;

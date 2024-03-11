import React from "react";
import ListItem from "./ListItem";

const List = ({ item, onDelete }) => {
  return (
    <div>
      {/* {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))} */}
       <ListItem key={item.id} item={item} onDelete={onDelete} />
    </div>
  );
};

export default List;
import Tasks from "../assets/data.json";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const List = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;

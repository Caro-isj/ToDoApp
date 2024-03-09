import Tasks from "../assets/data.json";
import ListItem from "./ListItem";

const List = ({ items, onDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default List;

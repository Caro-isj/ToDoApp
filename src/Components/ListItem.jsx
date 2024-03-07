const ListItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li>
      {item.task} {item.completed === true ? "✔️" : "❌"}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
export default ListItem;

//<Link> </Link> link each item to items details page!!

const ListItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li>
      {item.name} {item.isCompleted ? "✔️" : "❌"}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
export default ListItem;

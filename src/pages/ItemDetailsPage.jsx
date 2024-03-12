import { useParams } from "react-router-dom";

const ItemDetailsPage = ({ items }) => {
  const { itemId } = useParams();
  const taskProfile = items.find((current) => current.id == itemId);
  console.log(items);

  return (
    <div>
      <h2>Item Details </h2>
      {taskProfile ? (
        <div>
          <h3>{taskProfile.task}</h3>
          <p>
            {taskProfile.completed} Completion:
            {taskProfile.completed ? " ✔️" : " ❌"}
          </p>
        </div>
      ) : (
        <p>No item details available</p>
      )}
    </div>
  );
};

export default ItemDetailsPage;

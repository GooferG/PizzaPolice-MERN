import { useToppingsContext } from '../hooks/useToppingsContext';

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ToppingDetails = ({ topping, handleEdit }) => {
  const { dispatch } = useToppingsContext();

  const handleDeleteClick = async () => {
    const response = await fetch(
      `https://pizza-police.herokuapp.com/api/toppings/${topping._id}`,
      {
        method: 'DELETE',
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_TOPPING', payload: json });
    }
  };
  return (
    <div className="topping-details">
      <h4>{topping.title}</h4>
      <p>
        <strong>Quantity: </strong>
        {topping.quantity}
      </p>
      <p>
        <strong>Added: </strong>{' '}
        {formatDistanceToNow(new Date(topping.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDeleteClick} className="material-symbols-outlined">
        delete
      </span>
      <span
        onClick={() => handleEdit(true, topping)}
        className="material-symbols-outlined edit-icon"
      >
        edit
      </span>
    </div>
  );
};

export default ToppingDetails;

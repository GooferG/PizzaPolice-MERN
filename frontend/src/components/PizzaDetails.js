import { usePizzasContext } from '../hooks/usePizzasContext';

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const PizzaDetails = ({ pizzas, handleEdit }) => {
  const { dispatch } = usePizzasContext();

  const handleDeleteClick = async () => {
    const response = await fetch(`/api/pizzas/${pizzas._id}`, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_PIZZA', payload: json });
    }
  };
  return (
    <div className="topping-details">
      <h4>{pizzas.name}</h4>
      <p>
        <strong>Toppings: </strong>
        Ingredients
      </p>
      <p>
        <strong>Added: </strong>{' '}
        {formatDistanceToNow(new Date(pizzas.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDeleteClick} className="material-symbols-outlined">
        delete
      </span>
      <span
        onClick={() => handleEdit(true, pizzas)}
        className="material-symbols-outlined edit-icon"
      >
        edit
      </span>
    </div>
  );
};

export default PizzaDetails;

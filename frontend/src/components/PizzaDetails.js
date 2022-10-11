import { usePizzasContext } from '../hooks/usePizzasContext';

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const PizzaDetails = ({ name, _id, createdAt, handleEdit, pizza }) => {
  const { dispatch } = usePizzasContext();
  console.log();

  const handleDeleteClick = async () => {
    const response = await fetch(
      `https://pizza-police.herokuapp.com/api/pizzas/${_id}`,
      {
        method: 'DELETE',
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_PIZZA', payload: json });
    }
  };
  return (
    <div className="topping-details">
      <h4>{name}</h4>
      <p>
        <strong>Toppings: </strong>
        {pizza.ingredients.join(', ')}
      </p>
      <p>
        <strong>Added: </strong>{' '}
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDeleteClick} className="material-symbols-outlined">
        delete
      </span>
      <span
        onClick={() => handleEdit(true, pizza)}
        className="material-symbols-outlined edit-icon"
      >
        edit
      </span>
    </div>
  );
};

export default PizzaDetails;

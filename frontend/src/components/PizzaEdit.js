import { useState } from 'react';
import { usePizzasContext } from '../hooks/usePizzasContext';

const PizzaEdit = ({ handleBackButton, pizza }) => {
  const { dispatch } = usePizzasContext();
  const [pizzaName, setPizzaName] = useState(pizza.name);
  const [size, setSize] = useState(pizza.size);
  const [ingredients, setIngredients] = useState(pizza.ingredients);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pizzaObj = {
      name: pizzaName,
      size,
      ingredients: ingredients,
    };

    const response = await fetch(
      `https://pizza-police.herokuapp.com/api/pizzas/${pizza._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(pizzaObj),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setPizzaName(pizzaName);
      setSize(size);
      setIngredients(ingredients);
      setError(null);
      setEmptyFields([]);
      console.log('new edited pizza', json);
      dispatch({ type: 'UPDATE_PIZZA', payload: json });
      handleBackButton(false);
    }
  };

  return (
    <div>
      <p>
        <span
          className="material-symbols-outlined"
          onClick={() => handleBackButton(false)}
        >
          arrow_back
        </span>
      </p>
      <div className="topping-details">
        <form className="create" onSubmit={handleSubmit} method="POST">
          <h3>Edit Pizza</h3>
          <label>Pizza Name:</label>
          <input
            type="text"
            onChange={(e) => setPizzaName(e.target.value)}
            value={pizzaName}
            // className={emptyFields.includes('pizzaName') ? 'error' : ''}
          />

          <label>Size (in inches):</label>
          <input
            type="number"
            onChange={(e) => setSize(e.target.value)}
            value={size}
            // className={emptyFields.includes('size') ? 'error' : ''}
          />
          <label>Ingredients</label>
          <input
            type="text"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            // className={emptyFields.includes('ingredients') ? 'error' : ''}
          />
          <button>Edit Pizza</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default PizzaEdit;

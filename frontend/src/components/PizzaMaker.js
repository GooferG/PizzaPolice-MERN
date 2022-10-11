import { useState } from 'react';
import PizzaDisplay from './PizzaDisplay';
import { usePizzasContext } from '../hooks/usePizzasContext';

const PizzaMaker = ({ toppings }) => {
  const { pizzas, dispatch } = usePizzasContext();

  const [showEdit, setShowEdit] = useState(false);
  const [pizzaName, setPizzaName] = useState('');
  const [size, setSize] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleShowEdit = (isEdit, pizzaName) => {
    setShowEdit(isEdit);
    setPizzaName(pizzaName.name);
    setSize(pizzaName.size);
    setIngredients(pizzaName.ingredients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pizza = {
      name: pizzaName,
      size,
      ingredients: ingredients,
    };

    console.log(pizza);
    const response = await fetch(
      'https://pizza-police.herokuapp.com/api/pizzas',
      {
        method: 'POST',
        body: JSON.stringify(pizza),
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
      setPizzaName('');
      setSize('');
      setIngredients('');
      setError(null);
      setEmptyFields([]);
      console.log('new pizza added', json);
      dispatch({ type: 'CREATE_PIZZA', payload: json });
    }
  };

  const handleAddIngr = (v) => {
    setIngredients([...ingredients, v]);
  };

  return (
    <div className="container">
      <h1>Make your Master Pizza here! 👩‍🍳</h1>
      <h2>🍅Ingredients Available: </h2>
      <div className="ingredients">
        {toppings.map((v, i) => (
          <div key={i}>
            <span>{v.title}</span>
            <span>Available: {v.quantity}</span>
            <span className="btn" onClick={(e) => handleAddIngr(v.title)}>
              +
            </span>
            <span className="btn" onClick={(e) => setIngredients('')}>
              -
            </span>
          </div>
        ))}
      </div>
      <form className="create" onSubmit={handleSubmit}>
        <label>Pizza Name: </label>
        <input
          type="text"
          onChange={(e) => setPizzaName(e.target.value)}
          value={pizzaName}
          className={emptyFields.includes('pizzaName') ? 'error' : ''}
        />
        <label>Size (in inches): </label>
        <input
          type="number"
          onChange={(e) => setSize(e.target.value)}
          value={size}
          className={emptyFields.includes('size') ? 'error' : ''}
        />
        <label>Ingredients:</label>
        <input
          type="text"
          onChange={(e) => setIngredients(e.target.value)}
          value={ingredients}
          className={emptyFields.includes('ingredients') ? 'error' : ''}
        />
        <button>Add Pizza</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div>
        <PizzaDisplay toppings={toppings} handleEdit={handleShowEdit} />
      </div>
    </div>
  );
};

export default PizzaMaker;

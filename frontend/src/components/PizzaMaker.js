import { useState } from 'react';
import PizzaDisplay from './PizzaDisplay';

const PizzaMaker = ({ toppings }) => {
  const initialIngredients = {
    name: '',
    ingredients: ['cheese', 'pepperoni'],
  };

  const [pizza, setPizza] = useState('');
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pizza = {};
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
            <span className="btn">+</span>
            <span className="btn">-</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Pizza Name: </label>
        <input type="text" />
        <label>Size (in inches): </label>
        <input type="number" />
        <button>Add Pizza</button>
      </form>
      <div>
        <PizzaDisplay />
      </div>
    </div>
  );
};

export default PizzaMaker;

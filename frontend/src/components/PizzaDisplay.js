import { useToppingsContext } from '../hooks/useToppingsContext';

function PizzaDisplay({ toppings }) {
  return (
    <div>
      <h1>My Pizzas:</h1>
      <div>
        <ul>
          <li>Pizza #1</li>
          <li>Pizza #2</li>
          <li>Pizza #3</li>
        </ul>
      </div>
    </div>
  );
}

export default PizzaDisplay;

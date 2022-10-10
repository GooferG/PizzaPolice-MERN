import { useToppingsContext } from '../hooks/useToppingsContext';

function PizzaDisplay({ pizzaName, size }) {
  const { toppings, dispatch } = useToppingsContext();

  return (
    <div>
      <h1>My Pizzas:</h1>
      <div>
        <ul>
          <li>{toppings.map((t) => t.title)}</li>
          <li>Pizza #2</li>
          <li>Pizza #3</li>
        </ul>
      </div>
    </div>
  );
}

export default PizzaDisplay;

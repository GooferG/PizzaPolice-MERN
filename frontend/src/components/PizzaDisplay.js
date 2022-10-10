import { useEffect } from 'react';
import { usePizzasContext } from '../hooks/usePizzasContext';
import PizzaDetails from './PizzaDetails';

function PizzaDisplay({ pizzas, toppings }) {
  const { pizza, dispatch } = usePizzasContext();

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await fetch('/api/pizzas');
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: 'SET_PIZZAS',
          payload: json,
        });
      }
    };
    fetchPizzas();
  }, [pizza, dispatch]);

  // const pizzaNames = pizzas.map((p) => `Pizza name: ${p.name}`);

  return (
    <div>
      <h1>My Pizzas:</h1>
      <div>
        <ul>
          <li></li>
          {/* <li>{pizzaNames}</li> */}
          <li>
            {pizza &&
              pizzas.map((pizza) => (
                <PizzaDetails
                  key={pizza._id}
                  pizza={pizza}
                  // handleEdit={handleShowEdit}
                />
              ))}
          </li>
          <li>{toppings.map((t) => t.title)}</li>
        </ul>
      </div>
    </div>
  );
}

export default PizzaDisplay;

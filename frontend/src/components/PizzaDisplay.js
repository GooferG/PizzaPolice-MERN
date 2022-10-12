import { useEffect } from 'react';
import { usePizzasContext } from '../hooks/usePizzasContext';
import PizzaDetails from './PizzaDetails';

function PizzaDisplay({ handleShowEdit }) {
  const { pizzas, dispatch } = usePizzasContext();

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await fetch(
        'https://pizza-police.herokuapp.com/api/pizzas'
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: 'SET_PIZZAS',
          payload: json,
        });
      }
    };
    fetchPizzas();
  });

  return (
    <div>
      <h1>My Pizzas:</h1>
      <div>
        {pizzas?.length > 0 &&
          pizzas.map((pizza) => (
            <PizzaDetails
              key={pizza._id}
              name={pizza.name}
              _id={pizza._id}
              createdAt={pizza.createdAt}
              pizza={pizza}
              handleEdit={handleShowEdit}
            />
          ))}
      </div>
    </div>
  );
}

export default PizzaDisplay;

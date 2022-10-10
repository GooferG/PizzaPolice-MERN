import { PizzaContext } from '../context/PizzaContext';
import { useContext } from 'react';

export const usePizzasContext = () => {
  const context = useContext(PizzaContext);

  if (!context) {
    throw Error('usePizzasContext must be used inside a PizzasContextProvider');
  }

  return context;
};

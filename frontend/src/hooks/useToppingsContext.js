import { ToppingContext } from '../context/ToppingContext';
import { useContext } from 'react';

export const useToppingsContext = () => {
  const context = useContext(ToppingContext);

  if (!context) {
    throw Error(
      'useToppingsContext must be used inside a ToppingsContextProvider'
    );
  }

  return context;
};

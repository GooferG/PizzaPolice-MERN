import { createContext, useReducer } from 'react';

export const PizzaContext = createContext();

export const PizzasReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return { pizzas: action.payload };

    case 'CREATE_PIZZA':
      return {
        pizzas: [action.payload, ...state.pizzas],
      };
    case 'DELETE_PIZZA':
      return {
        pizzas: state.pizzas.filter((t) => t._id !== action.payload._id),
      };
    case 'UPDATE_PIZZA':
      console.log([action.payload, ...state.pizzas]);
      return {
        pizzas: [...state.pizzas],
      };
    default:
      return state;
  }
};

export const PizzaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PizzasReducer, {
    pizzas: null,
  });

  return (
    <PizzaContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

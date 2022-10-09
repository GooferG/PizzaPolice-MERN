import { createContext, useReducer } from 'react';

export const ToppingContext = createContext();

export const ToppingsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOPPINGS':
      return { toppings: action.payload };

    case 'CREATE_TOPPING':
      return {
        toppings: [action.payload, ...state.toppings],
      };
    case 'DELETE_TOPPING':
      return {
        toppings: state.toppings.filter((t) => t._id !== action.payload._id),
      };
    case 'UPDATE_TOPPING':
      console.log([action.payload, ...state.toppings]);
      return {
        toppings: [...state.toppings],
      };
    default:
      return state;
  }
};

export const ToppingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToppingsReducer, { toppings: null });

  return (
    <ToppingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToppingContext.Provider>
  );
};

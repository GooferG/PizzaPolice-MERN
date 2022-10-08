import { useEffect, useState } from 'react';
import { useToppingsContext } from '../hooks/useToppingsContext';

// components
import ToppingDetails from '../components/ToppingDetails';
import ToppingForm from '../components/ToppingForm';
import ToppingEdit from '../components/ToppingEdit';

const Home = () => {
  const { toppings, dispatch } = useToppingsContext();
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleShowEdit = (isEdit, topping, qty) => {
    setShowEdit(isEdit);
    setTitle(topping);
    setQuantity(qty);
  };

  useEffect(() => {
    const fetchToppings = async () => {
      const response = await fetch('/api/toppings');
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: 'SET_TOPPINGS',
          payload: json,
        });
      }
    };

    fetchToppings();
  }, [dispatch]);

  return (
    <div className="home">
      {showEdit ? (
        <ToppingEdit
          handleBackButton={setShowEdit}
          topping={title}
          qty={quantity}
        />
      ) : (
        <>
          <div classNme="toppings">
            {toppings &&
              toppings.map((topping) => (
                <ToppingDetails
                  key={topping._id}
                  topping={topping}
                  handleEdit={handleShowEdit}
                />
              ))}
          </div>
          <ToppingForm />
        </>
      )}
    </div>
  );
};

export default Home;

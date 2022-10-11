import { useState } from 'react';
import { useToppingsContext } from '../hooks/useToppingsContext';

const ToppingForm = () => {
  const { dispatch } = useToppingsContext();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toppingObj = {
      title,
      quantity,
    };

    const response = await fetch(
      'https://pizza-police.herokuapp.com/api/toppings',
      {
        method: 'POST',
        body: JSON.stringify(toppingObj),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle('');
      setQuantity('');
      setError(null);
      setEmptyFields([]);
      console.log('new toppping added', json);
      dispatch({ type: 'CREATE_TOPPING', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add A New Topping</h3>
      <label>Topping Name:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Quantity (in units):</label>
      <input
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        className={emptyFields.includes('quantity') ? 'error' : ''}
      />
      <button>Add Topping</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ToppingForm;

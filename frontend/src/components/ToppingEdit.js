import { useState } from 'react';
import { useToppingsContext } from '../hooks/useToppingsContext';

const ToppingEdit = ({ handleBackButton, topping }) => {
  const { dispatch } = useToppingsContext();
  const [title, setTitle] = useState(topping.title);
  const [quantity, setQuantity] = useState(topping.quantity);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.id);

    const toppingObj = {
      title,
      quantity,
    };

    const response = await fetch(`/api/toppings/${topping._id}`, {
      method: 'PUT',
      body: JSON.stringify(toppingObj),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle(title);
      setQuantity(quantity);
      setError(null);
      setEmptyFields([]);
      console.log('new edited topping', json);
      dispatch({ type: 'UPDATE_TOPPING', payload: json });
      // window.location.reload();
      handleBackButton(false);
    }
  };

  return (
    <div>
      <p>
        <span
          className="material-symbols-outlined"
          onClick={() => handleBackButton(false)}
        >
          arrow_back
        </span>
      </p>
      <div className="topping-details">
        <form className="create" onSubmit={handleSubmit} method="POST">
          {/* <input type="hidden" name="_method" value="PUT" /> */}
          <h3>Edit Topping</h3>
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
          <button>Edit Topping</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ToppingEdit;

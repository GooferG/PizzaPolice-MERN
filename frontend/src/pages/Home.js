import { useEffect, useState } from "react";
import { useToppingsContext } from "../hooks/useToppingsContext";
import { usePizzasContext } from "../hooks/usePizzasContext";

// components
import ToppingDetails from "../components/ToppingDetails";
import ToppingForm from "../components/ToppingForm";
import ToppingEdit from "../components/ToppingEdit";
import PizzaMaker from "../components/PizzaMaker";

const Home = ({ isAdmin }) => {
  const { toppings, dispatch } = useToppingsContext();
  const { pizzas, pizzasdispatch } = usePizzasContext();
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleShowEdit = (isEdit, topping, qty) => {
    setShowEdit(isEdit);
    setTitle(topping);
    setQuantity(qty);
  };

  useEffect(() => {
    const fetchToppings = async () => {
      const response = await fetch("/api/toppings");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_TOPPINGS",
          payload: json,
        });
      }
    };

    fetchToppings();
  }, []);

  return (
    <div className="home">
      {isAdmin && (
        <>
          {showEdit ? (
            <ToppingEdit
              handleBackButton={setShowEdit}
              topping={title}
              qty={quantity}
            />
          ) : (
            <>
              <div className="toppings">
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
        </>
      )}
      {!isAdmin && (
        <div>
          <PizzaMaker toppings={toppings} pizzas={pizzas} />
        </div>
      )}
    </div>
  );
};

export default Home;

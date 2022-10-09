import { Link } from 'react-router-dom';

const Navbar = ({ setIsAdmin }) => {
  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <h1>🍕 PizzaPolice 🍕</h1>
          <span>
            <button onClick={() => setIsAdmin(true)}>Admin</button>
            <button onClick={() => setIsAdmin(false)}>Chef</button>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

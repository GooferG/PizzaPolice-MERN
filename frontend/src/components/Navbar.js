import { Link } from 'react-router-dom';

const Navbar = ({ setIsAdmin }) => {
  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <h1>🍕 PizzaPolice 🍕</h1>
          <span>
            <button className="btn" onClick={() => setIsAdmin(true)}>
              Admin
            </button>
            <button className="btn" onClick={() => setIsAdmin(false)}>
              Chef
            </button>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

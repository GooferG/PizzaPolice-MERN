import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and Components
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setIsAdmin={setIsAdmin} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home isAdmin={isAdmin} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useState, createContext, useContext, useRef } from "react";
import Home from './page/Home';
import Projuct from "./page/Projuct";
import Search from './page/Search'
import Cat from './page/Cat'
import Cart from "./page/cart/Cart";
import './App.css';

export const ThemeContext = createContext({});
function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  return (
    <ThemeContext.Provider value={{ show, setShow, cart, setCart }}>
      <div className="App">
        <AppUrl />
      </div>
    </ThemeContext.Provider>
  );
}

const AppUrl = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:name" element={<Projuct />} />
        <Route path="search/:name" element={<Search />} />
        <Route path="cat/:name" element={<Cat />} />
        <Route path="cart/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

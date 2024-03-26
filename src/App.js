import LandingPage from './components/componentsforLanding/LandingPage';
import React, { useState } from 'react';
import "./App.css";
import ProductView from "./components/ProductView";
import CartPage from "./components/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/componentsforLanding/Appbar";
import RagisterPage from "./components/RagisterPage";
import LoginPage from "./components/LoginPage"

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addtocart = (product) => {
    const exsit = cartItem.find((x) => {
      return x.id === product.id;
    })
    if (exsit) {
      alert("This product is already in the Cart.")
    }
    else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }
    console.log(setCartItem)
  };
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage addtocart={addtocart} />} />
        <Route path="/cartpage" element={<CartPage addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path="/ragisterpage" element={<RagisterPage />} />
        <Route path='/loginpage' element={<LoginPage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

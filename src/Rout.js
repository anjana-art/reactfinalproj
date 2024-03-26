import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import CartPage from './components/CartPage';
import RagisterPage from "./components/RagisterPage";

const Rout = ({addtocart, cartItem, setCartItem})=>{

  return (
    <div>
       <Routes>
          <Route path="/" element = {<LandingPage addtocart={addtocart}/>} />
          <Route path="/cartpage" element ={<CartPage addtocart = {addtocart}  cartItem = {cartItem} setCartItem = {setCartItem}/>} />
          <Route path="/ragisterpage" element ={<RagisterPage/>}/>
          <Route path='/loginpage' element={<LandingPage/>}/>
       </Routes>   
    </div>
  )
}

export default Rout

import React, { useState } from "react";
import {Link} from 'react-router-dom';

function CartPage({ cartItem, setCartItem }) {
  return (
    <div>
      {cartItem.length === 0 && (
        <>
          <h2>Cart is Empty!! Please select the Product.</h2>
          <Link to="/">
          <button>Shopping</button>
          </Link>
        </>
      )}

      <div>
        {cartItem.map((item) => {
         return(
            
          <div className="cart-container">
          <div className="img-box">
            <img src={item.logo} alt={item.name} />
          </div>;
          <div className="item-detail">
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>

          </div>
         )
        })
        }
        {
          cartItem.length
        }

      </div>
    </div>
  );
}

export default CartPage;

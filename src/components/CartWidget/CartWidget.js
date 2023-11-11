import React, { useContext } from 'react'
import iconCart from '../../assets/imagen/cart.svg';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
 
  <div className="cart-item">
   <img src={iconCart} className="icon-cart" alt="cart" />
<Link to="/cart" className='CartWidget' style={{display:totalQuantity > 0 ? "block" : "none"}}>
   <span className="number">{totalQuantity}</span>
   </Link>
  </div>
  )
}

export default CartWidget 
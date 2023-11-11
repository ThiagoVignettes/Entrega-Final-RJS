import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import cartNoFound from '../../assets/imagen/cartNoFound.svg';



function Cart (){

const {cart, clearCart, totalQuantity, total } = useContext(CartContext)



if( totalQuantity === 0){
  return(
    <div className='ContainerListCart'>
       <img src={cartNoFound} className="icon-cart-no-found" alt="cart" />
      <h1>No hay items en el carrito</h1>
      <Link to="/" >
       <button className='addToCart'>Buscar productos</button> 
        </Link>
    </div>
  )
}


  return (
    
    <div className='containerCart'>

      <div className='headerCart'>
        <h3>Carrito de compras</h3>
        <h3>{totalQuantity} Productos</h3>
        </div>

        <div className='headerResumen'>
        <h3>Resumen del pedido</h3>
        </div>

<div className='listItemCart'>


{cart.map(p => <CartItem key={p.id} {...p}/>) }
</div>

<div className='seguirComprando'>
  <Link to="/">Seguir comprando</Link>
  <Link onClick={() => clearCart()} className='button'> X Limpiar Carrito</Link>
  </div>

<div className='resumen'>

      <div>
        <ul className='tableResumen'>
        <li>
            <span>Items:</span>
            <span>{totalQuantity}</span>
            </li>
          <li>
            <span>Envío:</span>
            <span>Free</span>
            </li>
            <li>
            <span>Descuento:</span>
            <span>Aplicado</span>
            </li>
          <li className='totalItemsResumenn'>
          <span>Total:</span>
          <span>${total}</span>
          </li>
        </ul>
 


      <Link to="/checkout" className='linkCheckout'>Checkout</Link>
    
     
      </div>

</div>
</div>
   
  )





}



export default Cart


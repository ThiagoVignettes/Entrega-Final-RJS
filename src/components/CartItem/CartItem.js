import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';



function CartItem({ name, img, price, id, quantity }) {

  const {removeItem} = useContext(CartContext)


  return (
    <div className='cartContainer'>
          <div className='imagenCart'>
          <span className="qty">{quantity}</span>
          <img src={img} alt={name} width="100%"/> 
          </div>
    
          <div className='nameItem'>
          <h6>{name}</h6>
          <p>Precio: ${price}</p>
   
          </div>

      <div className='priceItemTotal'>
      <p>${price*quantity}</p>
      </div>
  

<div>

<button onClick={() => removeItem(id)} className='removeButton'>Remover</button>
</div>
  

      </div>
  )
}

export default CartItem
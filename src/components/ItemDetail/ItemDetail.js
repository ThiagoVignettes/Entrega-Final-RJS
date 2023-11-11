import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext} from "../../context/CartContext"

function ItemDetail({id, name, img, category, description, price, stock}) {

const [quantityAdded, setQuantityAdded] = useState(0)

const {addItem} = useContext(CartContext)

const handleOnAdd = (quantity) =>{
  setQuantityAdded(quantity)

  const item ={ id,name, img,  price}
  
  addItem(item, quantity)
} 


  return (

<div className="containerItemDetail">
<div className="parent">
<div className="div1">
<picture className='imgProductoItemDetail'>
     <img src={img} alt='{name}' width="100%"/> 
      </picture>
</div>
<div className="div2">
<section className='infoItemDetail'>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Id: {id}</p>
      <p>Categoría: {category}</p>
      <p>Descripción: { description}</p>
      </section>
    <footer className='footer'>

   
      {
        quantityAdded > 0 ? (
          <Link to="/cart" className="ToCart">Terminar Compra</Link>
        
        ):(
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}  />
        )
      }
   
    </footer>
</div>
</div>
    
   
    

  </div>


 
  )
}

export default ItemDetail
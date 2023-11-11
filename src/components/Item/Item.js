import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, category}) => {

  return (
<Link to={`/item/${id}`}>
  <article className='card'>
    <picture className='imgProducto'>
      <div className='label'>{category}</div>
     <img src={img} alt='{name}' width="100%"/> 
      </picture>
    <section className='info'>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
    <footer className='footer'>
   
     <button className="addToCart">Ver Producto</button> 
    </footer>
    </section>
  </article>
  </Link>
  )
}

export default Item
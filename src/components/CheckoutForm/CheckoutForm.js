import React, { useState, useContext } from 'react'
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import { CartContext} from "../../context/CartContext"
import check from '../../assets/imagen/check.svg';
import { Link } from 'react-router-dom';

function CheckoutForm() {

  const { cart, total, clearCart } = useContext(CartContext)

  const items = cart.map((item) => {
    return {
      id: item.id,
      producto: item.name,
      cantidad: item.quantity,
      precio: item.price,
    }
  })


const formDefault = {
   buyer: { fullname: '',
    rut: '',
    phone: '',
    email: '',
    message: ''},       
  }


const [form, setForm] = useState(formDefault);
const [order, setOrder] = useState([]);
const [id, setId] = useState()

const date = new Date().toLocaleString();
 

const changeHandler = (ev) => { 
        const {name, value} = ev.target
        setForm({buyer:{...form.buyer, [name]: value}})
        const thisOrder = { ...form, items,fecha: date, total: total } 
        setOrder(thisOrder);
      };


const submitHandler =(ev) => {
    ev.preventDefault();
    clearCart()
    const db = getFirestore();
    const contactFormCollection = collection(db, "order")
    addDoc(contactFormCollection, order).then((snapshot) =>
    setId(snapshot.id)

    )
}



  return ( 
    
    <div className='FormContainer'>

    {typeof id !== 'undefined' ? (
      <div className='mensajeExito'>
       <img src={check} className="icon-cart-no-found" alt="cart" />
        <h2>Realizado</h2>
        <h3>La compra se ha realizado con exito</h3>
        <h3>El ID de tu compra es: {id}</h3>
        <p>Fecha de compra: {date}</p>
        <Link to="/"><button className='btn-regresar'>Regresar Home</button></Link>
        </div> 
        
        ) : (
    
      <form onSubmit={submitHandler}>
       <h2>Información de envío</h2>
       <p>Completa el siguiente formulario para procesar tu pedido.</p>
        <div>
          <label htmlFor="fullname">Nombre:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Nombre"
            value={form.fullname}
            onChange={changeHandler}
            required />
        </div>
        <div>
          <label htmlFor="rut">Rut:</label>
          <input
            type="text"
            id="rut"
            name="rut"
            placeholder="11.000.000-0"
            value={form.rut}
            onChange={changeHandler}
            required />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+569"
            value={form.phone}
            onChange={changeHandler}
            required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={changeHandler}
            required />
        </div>

        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            placeholder="Mensaje..."
            onChange={changeHandler}
            required ></textarea>
        </div>
        <button className='procesarOrden'>Finalizar compra</button>
      </form>
      
    )
    
    
    }

   
   
  </div>
  
 

  )

  
}

export default CheckoutForm
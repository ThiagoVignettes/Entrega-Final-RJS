import React from 'react'
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    
          <nav className='navbar'>    
          <Link to='/'> <img src={logo} className="logo" alt="logo" /></Link>         
          <div className="nav-links">
          <NavLink to={'/'} className='nav-item'>Inicio</NavLink>
          <NavLink to={`/category/ebike`} className='nav-item'> E-bike</NavLink>
          <NavLink to={`/category/mtb`} className='nav-item'> Montaña</NavLink>
          <NavLink to={`/category/ruta`} className='nav-item'>Ruta</NavLink>
          </div>
          <div>
          <CartWidget/>
          </div>
          </nav>
  )
}

export default Navbar
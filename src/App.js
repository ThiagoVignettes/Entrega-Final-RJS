import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/Cart"
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <CartProvider>
        <Navbar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h1>404 no found</h1>}/>
        </Routes>

        </CartProvider>
        </BrowserRouter> 
    </div>
  );
}

export default App;

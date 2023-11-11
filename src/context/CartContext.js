import React, { useState, useEffect } from 'react';


export const CartContext = React.createContext({
    cart:[]
})

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [ total, setTotal ] = useState(0);
  


    useEffect(() => {
        let totalCart = 0;
        cart.forEach((item) => {

            totalCart += item.price * item.quantity;
        });
        setTotal(totalCart)
    }, [ cart ]);



/*Agregar Items al  Carrito*/ 

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])       
        }else {
            console.log("El producto ya fue agregado")
        }
    }


/*Limpiar Carrito*/   

const clearCart =()=>{
    setCart([])
    setTotal(0);
}

const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}



/*Remover item */

    const removeItem =(itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)

    }

   /*Cantidad de items */

    const totalQuantity = cart.reduce((acc, item) => {
         return acc + item.quantity},0)




return(
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total}}>
        {children}
    </CartContext.Provider>
)


} 




export default CartContext;
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState({ items: [], total: 0 })


    const cartRemove = (id, name) => {
        setCart({
            ...cart,
            items: cart.items.filter(item => {
                if (item.id === id && item.name === name) {
                } else {
                    return item
                }
            })
        })
    }
    return (
        <CartContext.Provider value={{ cart, setCart, cartRemove }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
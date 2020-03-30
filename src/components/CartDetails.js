import React, { useContext } from 'react'
import PartsCard from './PartsCard'
import { CartContext } from "../contexts/CartContext"

export default function CartDetails(props) {
    const { cart } = useContext(CartContext);
    const cartTotal = cart.items.reduce((total, item) => {
        return total += item.price
    }, 0)
    return (
        <div>
            <div>
                <p>Total: {cartTotal} </p>
            </div>
            {cart.items.map((item, index) => {
                return <PartsCard part={item} key={index} />
            })}
        </div>
    )
}
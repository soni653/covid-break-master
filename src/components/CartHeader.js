import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../contexts/CartContext"
export default function CartHeader(props) {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart'>
                <p>Cart:{cart.items.length} </p>
            </Link>
        </div>
    )
}
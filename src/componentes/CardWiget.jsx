import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
    const { cartProductos, totalItems } = useContext(CartContext)

    return (
        <><FontAwesomeIcon icon={faShoppingCart} />
            <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
            </span>
        </>
    )
}

export default CartWidget
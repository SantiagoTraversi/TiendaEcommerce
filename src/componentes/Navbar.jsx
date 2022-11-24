import React, { useState, useContext } from 'react';
import CartWidget from './CardWiget'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'

const Navbar = () => {
    const { cartProductos } = useContext(CartContext)



    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'>
                    <a className="navbar-brand text-light">Tienda de Dulces</a>

                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/productos" className='text-decoration-none'><a className="nav-link text-light">Productos</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categorias" className='text-decoration-none'><a className="nav-link text-light">Categorias</a></Link>
                        </li>
                        {
                            cartProductos.length > 0 ? (
                                <li className="nav-item">
                                    <Link to="/carrito"> <a className="nav-link text-light"><CartWidget /></a></Link>
                                </li>
                            ) : null
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
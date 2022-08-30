import React from 'react'
import CardWiget from './CardWiget'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Tienda de Dulces</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#"><CardWiget /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
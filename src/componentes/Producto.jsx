import React from 'react'
import ItemCount from './ItemCount'
const Producto = ({ titulo, descripcion, imagen, stock }) => {
    return (

        <div className="col-sm-3">
            <div class="card shadow">

                <img src={imagen} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{titulo} </h5>
                    <p class="card-text">{descripcion} </p>
                    <ItemCount
                        stock={stock}
                    /> 
                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default Producto
import React from 'react'
import ItemCount from './ItemCount'
const Producto = ({ data }) => {

    const { titulo, descripcion, imagen, stock, precio } = data


    return (

        <div className="col-sm-3">
            <div class="card shadow carta-producto">
                <img src={imagen} className="img-fluid" alt="..." />
                <div className="card-body bg-dark">
                    <h5 className="card-title text-light">{titulo} </h5>
                    <p className="card-text text-light">{descripcion} </p>
                    <p className="card-text text-light">stock actual: {stock} </p>
                    <hr />
                    <div className="text-end">
                        <span className="badge bg-warning text-dark">$ {precio}</span>

                    </div>
                    <hr />
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
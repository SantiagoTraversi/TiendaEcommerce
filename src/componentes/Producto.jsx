import React from 'react'
import ItemCount from './ItemCount'
const Producto = ({ data }) => {

    const { titulo, descripcion, imagen, stock, precio } = data

    const submitComprar = (contador) => {
        alert("felicidades por su compra, agregaste: " + contador + " producto(s)");
    }

    return (

        <div className="col-sm-3 mb-3 ">
            <div class="card shadow carta-producto m-2 h-100">
                <img src={imagen} className="img-fluid" alt="..." />
                <div className="card-body bg-dark">
                    <h5 className="card-title text-light">{titulo} </h5>
                    <p className="card-text text-light">{descripcion} </p>
                    <p className="card-text text-light">stock actual: {stock} </p>
                    <div className="text-end">
                        <span className="badge bg-warning text-dark">$ {precio}</span>

                    </div>
                    <hr className='bg-light' />
                    <ItemCount
                        stock={stock}
                        initial={1}
                        submitComprar={submitComprar}
                    />

                </div>

            </div>
        </div>

    )
}

export default Producto
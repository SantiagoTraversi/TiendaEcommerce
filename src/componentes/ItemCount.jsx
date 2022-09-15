import React, { useState } from 'react'

const ItemCount = ({ stock, initial, submitComprar }) => {

    //recibe initial como 1 el cual es pasado como parametro inicial en el usestate.

    console.log(initial)

    const [contador, modificarContador] = useState(initial)


    const disminuirProducto = () => {
        if (contador >= 1) {
            modificarContador(contador - 1)
        }
    }
    const aumentarProducto = () => {
        if (contador < stock) {
            modificarContador(contador + 1)
        }
    }

    return (
        <div className='mt-auto'>
            <div className='col-auto'>
                <div className="input-group mb-3 text-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={disminuirProducto}>-</button>
                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" value={contador} disabled />
                    <button className="btn btn-outline-secondary" type="button" onClick={aumentarProducto}>+</button>
                </div>

            </div>
            <div className="">
                <a className="btn btn-primary w-100" onClick={() => submitComprar(contador)}>Añadir al carrito</a>
            </div>

        </div>
    )
}

export default ItemCount
import React, { useState } from 'react'

const ItemCount = ({stock}) => {

    const [contador, modificarContador] = useState (1)

    const disminuirProducto = () => {
        if (contador >=1) {
            modificarContador(contador - 1)
        }
    }
    const aumentarProducto = () => {
        if (contador < stock) {
            modificarContador(contador + 1)
        }
    }

    return (
        <div>
            <div className='col-auto'>
                <div className="input-group mb-3 text-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={disminuirProducto}>-</button>
                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" value={contador} disabled />
                    <button className="btn btn-outline-secondary" type="button" onClick={aumentarProducto}>+</button>
                </div>

            </div>

        </div>
    )
}

export default ItemCount
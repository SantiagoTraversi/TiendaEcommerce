import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import bd from '../Utils/firefabeConfig'

const Cart = () => {
    const { cartProductos, limpiarCarro, eliminarProductoCarrito } = useContext(CartContext)
    const [total, setTotal] = useState(1)
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    const [orden, setOrden] = useState({})

    useEffect(() => {
        sumarTotal(cartProductos)
        if (cartProductos.length > 0) {
            setOrden({
                items: cartProductos.map((product) => {
                    return {
                        id: product.id,
                        titulo: product.titulo,
                        cantidad: product.contador,
                        precio: product.precio
                    }
                }),
                comprador: {},
                fecha: new Date().toLocaleString(),
                total: total
            })
        }
    }, [total, cartProductos])


    const sumarTotal = (arr) => {
        let sum = 0;
        arr.forEach(function (item) {
            let calculo = item.precio * item.contador;
            sum += calculo;
        })
        setTotal(sum);
    }


    const guardarForm = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value })
    }

    const submitDatos = (e) => {
        //e.prevent es para que no se mande 2 veces cuando haga submit
        e.preventDefault()
        mandarDatos({ ...orden, comprador: formulario })
    }

    const mandarDatos = async (nuevaOrden) => {
        const coleccionOrden = collection(bd, 'ordenes')
        const ordenDoc = await addDoc(coleccionOrden, nuevaOrden)
    }

    return (
        <div className="container mt-2 min-vh-100">
            {
                cartProductos.length > 0 ? (
                    <div className="card shadow bg-dark mt-2 mb-2">
                        <div className="p-2">
                            <div className="card-header">

                                <h2 className='text-light'> Tu carrito de compras:</h2>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-dark table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Titulo</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Precio x Unidad</th>
                                                <th scope="col">Precio x Cantidad</th>
                                                <th scope="col">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                cartProductos.map((product) => {
                                                    let precioTotal = + product.precio * product.contador;
                                                    return (
                                                        <tr key={product.id}>
                                                            <td>{product.titulo}</td>
                                                            <td>{product.contador}</td>
                                                            <td>{product.precio}</td>
                                                            <td>{precioTotal}</td>
                                                            <td>
                                                                <button className="btn btn-warning" onClick={() => eliminarProductoCarrito(product.id)}>

                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                </button>

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                            <div className="card-footer text-end">
                                <p className='text-light m-3'>Total: ${total}</p>
                                <button className='m-3 btn btn-danger' onClick={limpiarCarro}>Vaciar carrito</button>
                                <button className='m-3 btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
                            </div>


                        </div>
                    </div>
                ) :
                    (
                        <div className="card shadow bg-dark">
                            <div className="p-2">
                                <div className="card-header">

                                    <h2 className='text-light'> Tu carrito de compras esta vacio</h2>
                                </div>
                                <hr />
                                <div className="card-body text-center">
                                    <p className='text-light'>

                                        Visita nuestros productos haciendo click en el siguiente boton <button className='btn btn-warning'>  <Link to="/productos" className='text-decoration-none text-dark'>Ver productos</Link></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
            }

            {/* <!-- Modal -->  */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Orden de compra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className='list-group'>
                                {
                                    cartProductos.map(item => {
                                        return (
                                            <li key={item.id} className="list-group-item">{item.titulo} - {item.contador}</li>
                                        )
                                    })
                                }
                            </ul>
                            <hr />
                            <div className="text-center mt-2 mb-2">

                                <p>El total de su compra es: {total}</p>
                            </div>
                            <hr />
                            <div className="text-center">
                                <h5>Completa tus datos</h5>
                            </div>
                            <form onSubmit={submitDatos}>

                                <div class="col-auto mb-2">
                                    <input type="text" class="form-control" name='nombre' placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" required onChange={guardarForm} />
                                </div>
                                <div className="col-auto mb-2">

                                    <input type="email" class="form-control" name='email' placeholder="Correo Electronico" aria-label="email" aria-describedby="basic-addon1" required onChange={guardarForm} />
                                </div>
                                <div className="col-auto mb-2">
                                    <input type="number" class="form-control" name='telefono' placeholder="Teléfono" aria-label="Nombre" aria-describedby="basic-addon1" required onChange={guardarForm}/>

                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Finalizar compra</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
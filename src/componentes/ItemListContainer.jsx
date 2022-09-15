import React, { useState, useEffect } from 'react'
import Producto from './Producto'
import listaproductos from '../Utils/listaproductos'
import { useParams } from 'react-router-dom';

const ListadoProductos = () => {

    const [productos, guardarProductos] = useState([])

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await productosPromise
                guardarProductos(respuesta)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [productos])

    const {categoria} = useParams()

    const filterCategory = listaproductos.filter((item) => item.categoria === categoria)


    const productosPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (categoria) {
                resolve(filterCategory)
            }else {
                resolve(listaproductos);
            }
            
        },2000);
    })


    return (
        <div className="container min-vh-100">
            <div className='row mt-4'>
                {
                    productos.map(item => {
                        return (
                            <Producto
                                key={item.id}
                                data={item}
                            />

                        )
                    })
                }

            </div>
        </div>
    )
}

export default ListadoProductos
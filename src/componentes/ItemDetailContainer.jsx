import React, { useEffect, useState } from 'react'
import listaproductos from '../Utils/listaproductos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    //productos llamados en la promise
    const [productos, guardarProductos] = useState([])



    useEffect(() => {

        obtenerProductos()
    }, [productos])

    const productosPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaproductos);

        }, 15);
    })

    const obtenerProductos = async () => {
        try {
            const respuesta = await productosPromise
            guardarProductos(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className='row m-2'>
                {
                    productos.map(item => {
                        return (
                            <ItemDetail
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

export default ItemDetailContainer
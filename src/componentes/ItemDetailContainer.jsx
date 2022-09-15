import React, { useEffect, useState } from 'react'
import listaproductos from '../Utils/listaproductos'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    //productos llamados en la promise
    const [productos, guardarProductos] = useState([])
    //producto encontrado en el some
    const [producto, guardarProducto] = useState([])

    const { id } = useParams()



    useEffect(() => {
        filtrarProducto()
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

    const filtrarProducto = () => {
        productos.some((item) => {
            if(item.id == id){
                guardarProducto(item)
            }
        })
    }

    return (
        <div className="container mt-4 min-vh-100">
            <ItemDetail data={producto} />
        </div>
    )
}

export default ItemDetailContainer
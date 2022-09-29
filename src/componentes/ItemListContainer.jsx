import React, { useState, useEffect } from 'react'
import Producto from './Producto'
import listaproductos from '../Utils/listaproductos'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import bd from '../Utils/firefabeConfig'

const ListadoProductos = () => {

    const [productos, guardarProductos] = useState([])
    const [productosBD, setProductosBD] = useState([])

    useEffect(() => {
        getProductos()
        const obtenerProductos = async () => {
            try {
                const respuesta = await productosPromise
                guardarProductos(respuesta)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [productosBD])
    //parametro de categoria
    const { categoria } = useParams()
    //filtra busqueda por categoria
    const filterCategory = productosBD.filter((item) => item.categoria === categoria)



    const productosPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (categoria) {
                resolve(filterCategory)

            } else {
                resolve(productosBD);
            }

        }, 1000);
    })


    //obtener productos de firestore
    const getProductos = async () => {
        // debugger
        const coleccionProductos = collection(bd, 'Productos')
        getDocs(coleccionProductos).then(response => {
            const product = response.docs.map(doc => (
                doc.data()
            ))
            setProductosBD(product)
        })
            .catch(error => {
                console.log(error)
            })
    }

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
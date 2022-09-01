import React,{useState, useEffect} from 'react'
import Producto from './Producto'
import listaproductos from '../Utils/listaproductos'

const ListadoProductos = () => {

    const [productos, guardarProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
    }, [productos])

    const productosPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaproductos);
            
        },2000);
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
    )
}

export default ListadoProductos
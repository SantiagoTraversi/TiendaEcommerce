import React, { useEffect, useState } from 'react'
// import listaproductos from '../Utils/listaproductos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import bd from '../Utils/firefabeConfig'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {


    //producto encontrado en el some
    const [productosBD, setProductosBD] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getProductos().then((res) => {
            setProductosBD(res)
        })
    }, [id])

    console.log(productosBD)

    // obtener productos de firestore
    const getProductos = async () => {
            const querydb = getFirestore();
            const docRef = doc(querydb, 'Productos', id)
            const docSnapshot = await getDoc(docRef)
            let product = docSnapshot.data()
    
            product.id = docSnapshot.id
            return product

    }

    return (
        <div className="container mt-4 min-vh-100">
            <ItemDetail data={productosBD} />
        </div>
    )
}
export default ItemDetailContainer
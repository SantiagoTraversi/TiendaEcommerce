import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [productosBD, setProductosBD] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProduct().then((res) => {
            setProductosBD(res)
        })
    }, [id])

    const getProduct = async () => {
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
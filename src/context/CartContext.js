import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartProductos, setCartProductos] = useState([])
    

    const agregarAlCarro = (producto, contador) => {

        const productoEnCarrito = cartProductos.find(item => item.id === producto.id)

        if (!productoEnCarrito) {
            //Si el producto NO esta en el carrito
            producto.contador = contador
            setCartProductos([...cartProductos, producto])
        }else{
            //Si el producto ESTA en el carrito
            productoEnCarrito.contador = productoEnCarrito.contador + contador;
            setCartProductos([productoEnCarrito])
        }
    }

    const limpiarCarro = () => {
        setCartProductos([])
    }

    const eliminarProductoCarrito = (id) => {

        const nuevoCarrito = cartProductos.filter(item => item.id !== id)
        setCartProductos(nuevoCarrito)
    }

    const data = {
        agregarAlCarro,
        limpiarCarro,
        eliminarProductoCarrito,
        setCartProductos,
        cartProductos

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
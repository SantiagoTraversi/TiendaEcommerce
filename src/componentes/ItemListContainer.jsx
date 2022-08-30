import React from 'react'
import Producto from './Producto'
const ListadoProductos = () => {
    return (
        <div className='row mt-4'>
            <Producto
                titulo="Tableta"
                descripcion="Elaborada con el chocolate que se ajuste a tu paladar"
                imagen="https://s1.eestatic.com/2018/11/07/actualidad/actualidad_351478872_104884997_1706x960.jpg"
                stock={6}
            />
            <Producto
                titulo="Bombones personalizados"
                descripcion="Personalizamos cualquier mensaje que quieras dedicar"
                imagen="https://http2.mlstatic.com/D_NQ_NP_959001-MLA43794902606_102020-O.webp"
                stock={3}
            />
        </div>
    )
}

export default ListadoProductos
import React from 'react';
import Navbar from './componentes/Navbar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';
import Footer from './componentes/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/Home.jsx';
import CategoriasContainer from './componentes/CategoriasContainer.jsx';
import PaginaNoEncontrada from './componentes/PaginaNoEncontrada.jsx';
import CartProvider from './context/CartContext.js';
import Cart from './componentes/Cart.jsx';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:id" element={<ItemDetailContainer />} />
      <Route path='/categorias' element={<CategoriasContainer />} />
      <Route path='/categorias/:categoria' element={<ItemListContainer />} />
      <Route path='*' element={<PaginaNoEncontrada /> } /> 
    </Routes>
    <Footer /> 

  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
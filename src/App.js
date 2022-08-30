import React from 'react';
import Navbar from './componentes/Navbar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx'; 
import Footer from './componentes/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Ecommerce Tienda de Dulces  </h1>
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
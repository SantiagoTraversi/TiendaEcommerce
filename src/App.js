import React from 'react';
import Navbar from './componentes/Navbar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';
import Footer from './componentes/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
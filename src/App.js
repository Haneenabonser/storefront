import React from 'react';
import { useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';


function App() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(true)
  }
  
  return (
    <div>
     <Header show={handleShowCart}/>
     {showCart && <Cart/>}
     <Categories/>
     <Products/>
     <Footer/>     
    </div>
  )
}

export default App

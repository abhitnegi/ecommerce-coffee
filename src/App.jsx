import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About'
import Footer from './components/footer/Footer';
import Order from './components/menu/Order';
import Cart from './components/cart/Cart';
import Search from './components/search/Search'
import ShopContextProvider from './shop-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [ newSearch, setNewSearch ] = useState("")
  const getData = data => {
    setNewSearch(data)
  }
  return (
    <>
    <ShopContextProvider>
    <Router basename="/ecommerce-coffee">
      <Navbar getData={getData}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/search' element={<Search newSearch={newSearch}/>}/>
      </Routes>
      <Footer />
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;

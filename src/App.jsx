import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About'
import Footer from './components/footer/Footer';
import Order from './components/menu/Order';
import Cart from './components/cart/Cart';
import ShopContextProvider from './shop-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <ShopContextProvider>
    <Router basename="/ecommerce-coffee">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;

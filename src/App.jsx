import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Vehicle from './Component/Vehicle';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import CartPage from './Component/CartPage';

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/vehicle' element={<Vehicle/>} />
      <Route path='/cart' element={<CartPage/>} />
    </Routes>
    <Footer/>
   </>
  );
}

export default App;

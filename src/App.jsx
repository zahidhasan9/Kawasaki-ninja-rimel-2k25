import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Vehicle from './Component/Vehicle';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/vehicle' element={<Vehicle />} />
    </Routes>
    <Footer/>
   </>
  );
}

export default App;

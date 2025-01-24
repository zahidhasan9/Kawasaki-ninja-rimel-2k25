import "./App.css";
import Navbar from "./Component/Navbar";
import Carousel from "./Component/Carousel";
import Offer from "./Component/Offer_promo"
import Featured from "./Component/Featured"
import Accessories from "./Component/Accessories"
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Carousel/>
        <Offer/>
        <Featured/>
        <Accessories/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

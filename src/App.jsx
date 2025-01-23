import "./App.css";
import Navbar from "./Component/Navbar";
import Carousel from "./Component/Carousel";
import Offer from "./Component/Offer_promo"
import Featured from "./Component/Featured"
import Accessories from "./Component/Accessories"

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
    </>
  );
}

export default App;

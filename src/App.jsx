import "./App.css";
import Navbar from "./Component/Navbar";
import Carousel from "./Component/Carousel";
import Offer from "./Component/Offer_promo"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Carousel/>
        <Offer/>
      </div>
    </>
  );
}

export default App;

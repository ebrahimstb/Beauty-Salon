import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Products from "./component/products/Products";
import Slider from "./component/slider/Slider";
import Testimonials from "./component/testimonials/Testimonials";
import Virtual from "./component/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

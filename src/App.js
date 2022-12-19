import "./App.css";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Products from "./component/products/Products";
import Slider from "./component/slider/Slider";
import Virtual from "./component/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
    </div>
  );
}

export default App;

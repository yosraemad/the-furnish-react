import "./styles/App.module.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Quote from "./components/Quote/Quote";
import ProductsGrid from "./components/Products Grid/ProductsGrid";
import ViewMoreButton from "./components/View More Button/ViewMoreButton";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Quote />
      <ProductsGrid />
      <ViewMoreButton />
    </>
  );
}

export default App;

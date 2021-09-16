import "./styles/App.module.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/:id">
        <ProductDetailPage />
      </Route>
    </>
  );
}

export default App;

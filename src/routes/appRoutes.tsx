
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import Body from "../components/Body";
const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRoutes;

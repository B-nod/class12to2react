import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import { Third } from "./components/Third";
import Layout from "./components/user/Layout";
import Homepage from "./pages/Homepage";
import Productpages from "./pages/Productpages";
import ProductDetail from "./pages/ProductDetail";


const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Productpages />} />
            <Route path="productdetail/:productId" element={<ProductDetail />} />
          </Route>
        
        </Routes>
      </Router>
    </>
  );
};

export default Myroute;

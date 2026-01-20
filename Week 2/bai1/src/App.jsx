import React from "react";
import "./app.css";
import { ProductCard } from "./components/productCard/ProductCard";

const App = () => {
  return (
    <>
      <ProductCard
        name="Spicy fried chicken"
        price="40,000 VND"
        image="../../../asset/fried-chicken.jpg"
      />
    </>
  );
};

export default App;

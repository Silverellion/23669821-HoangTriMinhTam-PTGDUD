import React from "react";
import "./ProductCard.css";
import { AddToCart } from "../addToCart/addToCart";

export const ProductCard = ({ name, price, image }) => {
  return (
    <div className="card">
      <img src={image} className="product-image" alt="" />
      <p className="product-title">{name}</p>
      <p className="product-price">{price}</p>
      <AddToCart />
    </div>
  );
};

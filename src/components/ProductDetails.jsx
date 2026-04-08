import React from "react";
import StarRating from "./StarRating";

const ProductDetails = ({ name, description, price, rating }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p style={{ fontWeight: "bold" }}>{price}₴</p>
      <StarRating rating={rating} />
    </div>
  );
};

export default ProductDetails;
import React, { useState } from "react";
import ProductDetails from "../ProductDetails";
import ProductActions from "../ProductActions";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    alert(`Куплено ${quantity} шт. товару: ${product.name}`);
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <ProductDetails
        name={product.name}
        description={product.description}
        price={product.price}
        rating={product.rating}
      />
      <ProductActions quantity={quantity} setQuantity={setQuantity} onBuy={handleBuy} />
    </div>
  );
};

export default ProductCard;
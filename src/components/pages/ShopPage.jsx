import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Смарт-годинник",
    description: "Трендовий годинник для спорту та щоденного використання",
    price: 2499,
    rating: 4,
    image: "https://via.placeholder.com/250x150",
  },
  {
    id: 2,
    name: "Навушники",
    description: "Бездротові Bluetooth навушники з гарним звуком",
    price: 1299,
    rating: 5,
    image: "https://via.placeholder.com/250x150",
  },
];

const ShopPage = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ShopPage;
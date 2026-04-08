import React from "react";
import Button from "./atoms/Button/Button";

const ProductActions = ({ quantity, setQuantity, onBuy }) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "10px" }}>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ width: "60px", padding: "4px" }}
      />
      <Button onClick={onBuy} disabled={quantity < 1}>
        Купити
      </Button>
    </div>
  );
};

export default ProductActions;
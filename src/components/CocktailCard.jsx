import React from "react";

const CocktailCard = ({ drink }) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>
        {drink.strDrink}
      </h3>
      <p style={{ fontSize: "12px", color: "#555" }}>
        {drink.strAlcoholic} | {drink.strCategory}
      </p>
    </div>
  );
};

export default CocktailCard;
import React, { useState } from "react";
import { useCocktails } from "../hoc/useCocktails";
import CocktailCard from "../CocktailCard";

const NewsFeed = () => {
  const [query, setQuery] = useState("margarita");
  const { drinks, isLoading, error } = useCocktails(query);

  const handleSearch = (e) => {
    e.preventDefault();
    // useCocktails автоматично підхоплює query з state
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Коктейлі</h2>

      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Пошук коктейлю..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "6px", width: "200px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "6px 12px" }}>
          Пошук
        </button>
      </form>

      {isLoading && <p>Завантаження коктейлів...</p>}
      {error && <p style={{ color: "red" }}>Помилка: {error}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {drinks.length === 0 && !isLoading && <p>Нічого не знайдено 😢</p>}
        {drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
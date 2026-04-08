import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const NewsFeed = () => {
  const { width = window.innerWidth } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Стрічка Новин</h2>

      {isMobile && (
        <div
          style={{
            background: "#ffe4e1",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
          }}
        >
          📱 Ви переглядаєте мобільну версію
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        <div style={{ background: "#eee", padding: "20px" }}>Пост 1</div>
        <div style={{ background: "#eee", padding: "20px" }}>Пост 2</div>
        <div style={{ background: "#eee", padding: "20px" }}>Пост 3</div>
      </div>
    </div>
  );
};

export default NewsFeed;
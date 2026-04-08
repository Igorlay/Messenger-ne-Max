import React from "react";

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (i < rating ? "★" : "☆"));

  return <div style={{ color: "gold", fontSize: "16px" }}>{stars.join("")}</div>;
};

export default StarRating;
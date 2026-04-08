import React from "react";

const ActivityItem = ({ title, onLike }) => {
  // Якби цей компонент перемальовувався, він би блимав або виводив це:
  console.log(`ActivityItem (${title}) відрендерився!`);

  return (
    <div>
      {title} <button onClick={onLike}>Like</button>
    </div>
  );
};

export default ActivityItem;
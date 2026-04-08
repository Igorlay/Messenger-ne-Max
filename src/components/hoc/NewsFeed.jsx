// src/pages/NewsFeed.jsx (Фрагмент)
import { useState, useMemo } from "react";

// Це ДУЖЕ повільна функція.
// Вона займає ~100-300 мілісекунд при кожному своєму виклику.
const generateHeavyAnalytics = (num) => {
  console.log("Запуск важких обчислень...");
  let result = 0;
  for (let i = 0; i < 10000; i++) {
    result += num;
  }
  return result;
};

const NewsFeed = () => {
  const [inputValue, setInputValue] = useState("");
  const [analyticsNumber, setAnalyticsNumber] = useState(1);

  // ВИКЛИК ПОМИЛКИ: Ми викликаємо функцію ТУТ, тобто при КОЖНОМУ рендері NewsFeed
  const analyticsResult = useMemo(() => {
    return generateHeavyAnalytics(analyticsNumber);
  }, [analyticsNumber]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Стрічка новин</h1>
      <p>Результат аналітики: {analyticsResult}</p>

      {/* Простий інпут. Він зберігає свій текст у стейт inputValue */}
      <input
        placeholder="Пошук (друкуйте повільно)..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default NewsFeed;
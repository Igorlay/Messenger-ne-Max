import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  // 1. Читаем из localStorage при инициализации
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Помилка читання localStorage:", error);
      return initialValue;
    }
  });

  // 2. Сохраняем при каждом изменении
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Помилка запису localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
};
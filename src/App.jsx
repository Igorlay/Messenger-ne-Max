import { useState } from "react";
import Header from "./components/molecules/Header/Header";
import Post from "./components/molecules/Post/Post";
import SearchBar from "./components/molecules/SearchBar/SearchBar";
import { students } from "./data";
import styles from "./App.module.css";

function App() {
  // 🔹 1. Help toggle
  const [showHelp, setShowHelp] = useState(false);

  // 🔹 2. Фільтр
  const [filterActive, setFilterActive] = useState(false);

  // 🔹 3. Tabs
  const [activeTab, setActiveTab] = useState("list");

  // 🔹 Фільтр студентів
  const filteredStudents = students.filter(
    (s) => (s.score ?? 0) >= 60
  );

  return (
    <div className={styles.appContainer}>
      <h1>Система студентів</h1>

      {/* 🔹 КНОПКА ДОВІДКИ */}
      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? "Приховати інструкцію" : "Показати інструкцію"}
      </button>

      {showHelp && (
        <p>Довідка: Дозволяє керувати списками студентів.</p>
      )}

      {/* 🔹 КНОПКА ФІЛЬТРА */}
      <button onClick={() => setFilterActive(!filterActive)}>
        {filterActive ? "Показати всіх" : "Показати тільки успішних"}
      </button>

      {/* 🔹 ТАБИ */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setActiveTab("list")}
          className={activeTab === "list" ? styles.activeTab : ""}
        >
          Всі студенти
        </button>

        <button
          onClick={() => setActiveTab("stats")}
          className={activeTab === "stats" ? styles.activeTab : ""}
        >
          Статистика
        </button>

        <button
          onClick={() => setActiveTab("about")}
          className={activeTab === "about" ? styles.activeTab : ""}
        >
          Про автора
        </button>
      </div>

      {/* 🔹 КОНТЕНТ */}
      <div className={styles.content}>
        {activeTab === "list" && (
          <>
            {(filterActive ? filteredStudents : students).length > 0 ? (
              (filterActive ? filteredStudents : students).map((student) => (
                <div key={student.id}>
                  <strong>{student.name}</strong> —{" "}
                  
                  {/* 🔹 Захист від undefined */}
                  {student.score ?? "Оцінка відсутня"} —{" "}

                  {/* 🔹 Колір + статус */}
                  <span
                    style={{
                      color:
                        (student.score ?? 0) >= 60 ? "green" : "red",
                    }}
                  >
                    {(student.score ?? 0) >= 60
                      ? "Зараховано"
                      : "Незараховано"}
                  </span>
                </div>
              ))
            ) : (
              <p>За вашим запитом нікого не знайдено</p>
            )}
          </>
        )}

        {activeTab === "stats" && (
          <div>
            <h3>Статистика</h3>
            <p>
              Кількість студентів: {students.length}
            </p>
            <p>
              Успішні: {filteredStudents.length}
            </p>
          </div>
        )}

        {activeTab === "about" && (
          <div>
            <h3>Про автора</h3>
            <p>Це навчальний проєкт на React 🚀</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
import Header from "./components/molecules/Header/Header";
import { students } from "./data";

function App() {
  // 🔹 Фільтрація активних студентів з балом > 60
  const activeStudents = students.filter(
    (s) => s.isActive && s.score > 60
  );

  // 🔹 Середній бал активних студентів
  const averageScore =
    activeStudents.length > 0
      ? (
          activeStudents.reduce((sum, s) => sum + s.score, 0) /
          activeStudents.length
        ).toFixed(2)
      : 0;

  // 🔹 Сортування (від більшого до меншого)
  const sortedStudents = [...students].sort(
    (a, b) => b.score - a.score
  );

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1>Студенти</h1>

      {/* 🔹 1. Весь список */}
      <h2>Всі студенти</h2>
      {students.map((student) => (
        <p
          key={student.id}
          style={{
            color: student.isActive ? "black" : "gray",
            textDecoration: student.isActive ? "none" : "line-through",
          }}
        >
          {student.name} — {student.score}
        </p>
      ))}

      {/* 🔹 2. Відфільтровані */}
      <h2>Активні студенти (бал більше 60)</h2>
      {activeStudents.map((student) => (
        <p key={student.id}>
          {student.name} — {student.score}
        </p>
      ))}

      {/* 🔹 3. Середній бал */}
      <h2>Середній бал активних студентів: {averageScore}</h2>

      {/* 🔹 4. Відсортований список */}
      <h2>Сортування (за спаданням)</h2>
      {sortedStudents.map((student) => (
        <p key={student.id}>
          {student.name} — {student.score}
        </p>
      ))}
    </div>
  );
}

export default App;
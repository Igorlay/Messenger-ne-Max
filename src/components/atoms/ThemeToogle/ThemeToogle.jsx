import { useLocalStorage } from "../../hoc/useLocalStorage";

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        background: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Поточна тема: {theme}</h2>
      <button onClick={toggleTheme}>Змінити тему</button>
    </div>
  );
};

export default ThemeToggle;
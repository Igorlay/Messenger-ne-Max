import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout/MainLayout";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import NewsFeed from "./components/hoc/NewsFeed";
import useOnlineStatus from "./hooks/useOnlineStatus";
import ToogleTheme from "./components/atoms/ThemeToogle/ThemeToogle";

function App() {
  const isOnline = useOnlineStatus(); // ✅ ВАЖНО

  return (
    <>
      {!isOnline && (
        <div
          style={{
            background: "red",
            color: "white",
            textAlign: "center",
            padding: "10px",
            position: "sticky",
            top: 0,
            zIndex: 9999,
          }}
        >
          ⚠️ Відсутнє підключення до Інтернету. Деякі функції можуть бути недоступні.
        </div>
      )}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="newsfeed" element={<NewsFeed />} />
          <Route path="themetoogle" element={<ToogleTheme />} />

          {/* Захищений маршрут */}
          <Route element={<ProtectedRoute />}>
            <Route path="profile/*" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
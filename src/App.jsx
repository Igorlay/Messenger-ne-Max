import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout/MainLayout";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import NewsFeed from "./components/hoc/NewsFeed";
import Feed from "./components/pages/Feed/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="newsfeed" element={<NewsFeed />} />
        <Route path="feed" element={<Feed />} />
        {/* Захищений маршрут */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile/*" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout/MainLayout";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import ProfilePage from "./components/pages/ProfilePage";
import ShopPage from "./components/pages/ShopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profilepage" element={<ProfilePage />} />
        <Route path="shop" element={<ShopPage />} />

        {/* Захищений маршрут */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile/*" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
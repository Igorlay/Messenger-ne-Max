import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout/MainLayout.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Feed from "./components/pages/Feed/Feed.jsx";
import PostPage from "./components/pages/PostPage/PostPage.jsx";
import Profile from "./components/pages/Profile/Profile.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
function App() {
return (
<Routes>
<Route path='/' element={<MainLayout />}>
<Route index element={<Home />} />
<Route path='feed' element={<Feed />} />
<Route path='feed/:postId' element={<PostPage />} />
<Route path='profile/*' element={<Profile />} />
<Route path='*' element={<NotFound />} />
</Route>
</Routes>
);
}
export default App;
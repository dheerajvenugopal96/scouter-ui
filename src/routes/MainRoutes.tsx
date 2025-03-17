import { Route, Routes } from "react-router";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LayoutMain from "../components/layout/LayoutMain";
import SignIn from "../pages/login/SignIn";
import ProfilePage from "../pages/profile/ProfilePage";
import CreateGame from "../pages/game/CreateGame";
import GameList from "../pages/game/GameList";
import GameDetail from "../pages/game/GameDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route element={<LayoutMain />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/game">
          <Route index element={<CreateGame />} />
          <Route path="list" element={<GameList />} />
          <Route path="detail/:id" element={<GameDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;

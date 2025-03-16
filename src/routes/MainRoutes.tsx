import { Route, Routes } from "react-router";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LayoutMain from "../components/layout/LayoutMain";
import SignIn from "../pages/login/SignIn";
import ProfilePage from "../pages/profile/ProfilePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route element={<LayoutMain />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { authActions } from "../../redux/slices/authSlice";

const LayoutMain = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(sessionStorage.getItem('loggedUser')){
      const {username} = JSON.parse(sessionStorage.getItem('loggedUser')!);
      dispatch(authActions.setUsername(username));
    }
  })
  /* 
    1. Header
    2. Outlet
    3. Footer
    */
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default LayoutMain;

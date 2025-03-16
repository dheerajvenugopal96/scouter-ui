import { useNavigate } from "react-router";
import LoginImage from "../../assets/SignIn.webp";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import useSignIn from "../../hooks/useSignIn";
import { login } from "../../services/AdminService";
import { SignUpAction } from "../../model/ScouterModels";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  const { state: loginState, dispatch } = useSignIn();
  const loginErrorRef = useRef<Toast>(null);

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(loginState);
      navigate("/dashboard")
    } catch (error: any) {
      loginErrorRef.current?.show({
        severity: "error",
        summary: "Invalid Credentials",
        detail: "Please check login credentials",
        life: 3000,
      });
    }
  };

  /*
  1. Image
  2. SignIn/SignUp
  */

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div aria-label="login-image" className="w-full h-full relative">
        <img
          src={LoginImage}
          className="w-full h-full object-cover aspect-auto"
          alt="Login"
        />
        <span className="absolute bottom-0 font-bold text-white font-serif text-2xl ml-2">
          Login to Scouter
        </span>
      </div>
      <div aria-label="login-form" className="w-full">
        <form onSubmit={handleLoginSubmit} className="my-2 mx-2 *:my-1">
          <div aria-label="username">
            <InputText
              type="text"
              onChange={(e) =>
                dispatch({
                  type: SignUpAction.USERNAME,
                  payload: e.target.value,
                })
              }
              value={loginState.username}
              placeholder="Username"
            />
          </div>
          <div aria-label="password-input">
            <InputText
              type="password"
              onChange={(e) =>
                dispatch({
                  type: SignUpAction.PASSWORD,
                  payload: e.target.value,
                })
              }
              value={loginState.password}
              placeholder="Password"
            />
          </div>
          <div>
            <Button severity="success">Login</Button>
            <Button
              severity="info"
              style={{ marginLeft: "1em" }}
              onClick={() => navigate("/signin")}
            >
              Join
            </Button>
            <Button
              label="Skip & Go Home"
              link
              onClick={() => navigate("/dashboard")}
            />
          </div>
        </form>
      </div>
      <Toast ref={loginErrorRef} position="top-center" />
    </div>
  );
};

export default LoginPage;

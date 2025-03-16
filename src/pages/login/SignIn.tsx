import { InputText } from "primereact/inputtext";
import SigninImage from "../../assets/SignUp.webp";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { saveUserDetails } from "../../services/AdminService";
import useSignIn from "../../hooks/useSignIn";
import { SignUpAction } from "../../model/ScouterModels";

const SignIn = () => {
  const navigate = useNavigate();
  const [submitDisabled, isSubmitDisabled] = useState(true);
  const { state: signUpState, dispatch } = useSignIn();

  useEffect(() => {
    const { email, username, password } = signUpState;
    if (email && username && password) {
      isSubmitDisabled(false);
    }
  }, [signUpState]);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await saveUserDetails(signUpState);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div aria-label="Sign In-image" className="w-full h-full relative">
        <img
          src={SigninImage}
          className="w-full h-full object-cover aspect-auto"
          alt="Sign In"
        />
        <span className="absolute bottom-0 font-bold text-white font-serif text-2xl ml-2">
          Sign in to Scouter
        </span>
      </div>
      <div aria-label="Sign In-form" className="w-full">
        <form onSubmit={handleSubmitForm} className="my-2 mx-2 *:my-1">
          <div aria-label="email">
            <InputText
              type="email"
              onChange={(e) =>
                dispatch({ type: SignUpAction.EMAIL, payload: e.target.value })
              }
              value={signUpState.email}
              placeholder="Email Address"
            />
          </div>
          <div aria-label="username">
            <InputText
              type="text"
              onChange={(e) =>
                dispatch({
                  type: SignUpAction.USERNAME,
                  payload: e.target.value,
                })
              }
              value={signUpState.username}
              placeholder="Username"
            />
          </div>
          <div aria-label="password">
            <InputText
              type="password"
              onChange={(e) =>
                dispatch({
                  type: SignUpAction.PASSWORD,
                  payload: e.target.value,
                })
              }
              value={signUpState.password}
              placeholder="Password"
            />
          </div>
          <div>
            <Button type="submit" severity="success" disabled={submitDisabled}>
              Sign In
            </Button>
            <Button
              type="button"
              label="Back to Login"
              link
              onClick={() => navigate("/login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

import { useReducer } from "react";
import { SignUpAction, SignUpProps } from "../model/ScouterModels";

type SignUpActionType = {
  type: string;
  payload: string;
};

const initialState: SignUpProps = {
  email: "",
  username: "",
  password: "",
};

const signUpReducer = (
  state: SignUpProps,
  action: SignUpActionType
): SignUpProps => {
  switch (action.type) {
    case SignUpAction.EMAIL:
      return { ...state, email: action.payload };

    case SignUpAction.PASSWORD:
      return { ...state, password: action.payload };

    case SignUpAction.USERNAME:
      return { ...state, username: action.payload };

    default:
      return state;
  }
};
const useSignIn = () => {
  const [state, dispatch] = useReducer(signUpReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useSignIn;

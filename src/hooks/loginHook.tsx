import { LoginContext } from "../contexts/loguin/contextLogin";
import { SetStateAction, useContext } from "react";

type contextType = {
  userIsLogeed: boolean;
  setUserISLogeed: React.Dispatch<SetStateAction<boolean>>;
};

export const useLogin = () => useContext(LoginContext);

import { createContext, useState, ReactNode, SetStateAction } from "react";

type contextType = {
  userIsLogeed: boolean;
  setUserISLogeed: React.Dispatch<SetStateAction<boolean>>;
};

export const LoginContext = createContext<contextType | null>(null);

type LoginProps = {
  children: ReactNode;
};

export const LoginProvider = ({ children }: LoginProps) => {
  const [userIsLogeed, setUserISLogeed] = useState(false);

  return (
    <LoginContext.Provider value={{ userIsLogeed, setUserISLogeed }}>
      {children}
    </LoginContext.Provider>
  );
};

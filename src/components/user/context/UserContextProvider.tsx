import { createContext, useCallback, useState } from "react";

type UserContextProps = { children: React.ReactNode };
type UserAuthType = { name: string; email: string };
type ContextValueType = {
  user: UserAuthType | null;
  setUser: React.Dispatch<React.SetStateAction<UserAuthType | null>>;
  login: () => void;
  logout: () => void;
};

export const userContent = createContext<ContextValueType>(
  {} as ContextValueType
);

function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<UserAuthType | null>(null);
  const login = useCallback(() => {
    setUser({ name: "Armand", email: "armand@gmail.com" });
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <userContent.Provider value={{ user, setUser, login, logout }}>
      {children}
    </userContent.Provider>
  );
}

export default UserContextProvider;

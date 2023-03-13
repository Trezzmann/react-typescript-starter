import { createContext, useState } from "react";

type UserContextProps = { children: React.ReactNode };
type UserAuthType = { name: string; email: string };
type ContextValueType = {
  user: UserAuthType | null;
  setUser: React.Dispatch<React.SetStateAction<UserAuthType | null>>;
};

export const userContent = createContext<ContextValueType>(
  {} as ContextValueType
);

import React from "react";

function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<UserAuthType | null>(null);
  return (
    <userContent.Provider value={{ user, setUser }}>
      {children}
    </userContent.Provider>
  );
}

export default UserContextProvider;

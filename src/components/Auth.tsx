import { useState } from "react";

type authType = {
  username: string;
  role: string;
};

function Auth() {
  const [userAuth, setUserAuth] = useState<authType | null>(null);

  const login = () => {
    setUserAuth(() => ({
      username: "Trezzmann",
      role: "Developer",
    }));
  };
  const logout = () => {
    setUserAuth(null);
  };

  return (
    <div>
      <div>
        {userAuth
          ? `Welcome ${userAuth.username} ${userAuth.role}`
          : "Login or register"}
      </div>
      {userAuth ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Auth;

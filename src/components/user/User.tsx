import { useContext } from "react";
import { userContent } from "./context/UserContextProvider";

function User() {
  const context = useContext(userContent);

  const handleLogin = () => {
    context.setUser({ name: "Mando", email: "mando@gmail.com" });
  };
  const handleLogout = () => {
    context.setUser(null);
  };
  return (
    <div>
      <div>User page</div>
      {context.user ? (
        <>
          <div>{context.user.name}</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div>You are not logged in</div>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default User;

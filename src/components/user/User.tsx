import { useContext } from "react";
import { userContent } from "./context/UserContextProvider";

function User() {
  const context = useContext(userContent);

  return (
    <div>
      <div>User page</div>
      {context.user ? (
        <>
          <div>{context.user.name}</div>
          <button onClick={context.logout}>Logout</button>
        </>
      ) : (
        <>
          <div>You are not logged in</div>
          <button onClick={context.login}>Login</button>
        </>
      )}
    </div>
  );
}

export default User;

import "./App.css";
import Private from "./components/Guard/Private";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Todo from "./components/Todo/Todo";
import UserContextProvider from "./components/user/context/UserContextProvider";
import User from "./components/user/User";
import Profile from "./components/Guard/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Private isLoggedIn={true} component={Profile} />
      </div>
    </UserContextProvider>
  );
}

export default App;

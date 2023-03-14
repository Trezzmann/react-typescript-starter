import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo/Todo";
import UserContextProvider from "./components/user/context/UserContextProvider";
import User from "./components/user/User";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Home isLoggedIn={true} name="Mando" />
      </div>
    </UserContextProvider>
  );
}

export default App;

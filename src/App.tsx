import "./App.css";
import Todo from "./components/Todo/Todo";
import UserContextProvider from "./components/user/context/UserContextProvider";
import User from "./components/user/User";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Todo />
      </div>
    </UserContextProvider>
  );
}

export default App;

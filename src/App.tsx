import "./App.css";
import UserContextProvider from "./components/user/context/UserContextProvider";
import User from "./components/user/User";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <User />
      </div>
    </UserContextProvider>
  );
}

export default App;

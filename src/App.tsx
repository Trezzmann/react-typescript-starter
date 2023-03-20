import "./App.css";
import Private from "./components/Guard/Private";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Todo from "./components/Todo/Todo";
import UserContextProvider from "./components/user/context/UserContextProvider";
import User from "./components/user/User";
import Profile from "./components/Guard/Profile";
import List from "./components/List";

// const list = ["Mando", "Trezzmann", "Armand"];
// const list = [1, 2, 3];
const list = [
  { id: 1, name: "Mando" },
  { id: 2, name: "Trezz" },
  { id: 3, name: "Mundo" },
];

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <List list={list} handleClick={(item) => console.log(item)} />
      </div>
    </UserContextProvider>
  );
}

export default App;

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home name="Nahimana" isLoggedIn={true} messagesNumber={25} />
    </div>
  );
}

export default App;

import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person firstname="Mando" lastname="Muzz" age={23} />
    </div>
  );
}

export default App;

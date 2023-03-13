import "./App.css";
import Auth from "./components/Auth";
import ProjectsList from "./components/projects/ProjectsList";
import ProjectWrapper from "./components/projects/ProjectWrapper";
import Todo from "./components/Todo/Todo";

const projects = [
  {
    title: "Project 1",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Project 2",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Project 3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

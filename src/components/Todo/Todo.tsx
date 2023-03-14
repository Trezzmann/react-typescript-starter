import { useEffect, useReducer, useRef, useState } from "react";
import { actionType, todoType } from "./Todo.types";

const initialState: todoType[] = [];

const reducer = (state: typeof initialState, action: actionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.floor(Math.random() * 50), description: action.payload },
      ];

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

function Todo() {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");
  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: value });
    setValue("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <div className="todo-form">
        <input
          ref={inputRef}
          placeholder="Shopping..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todos">
        {state.length
          ? state.map((todo) => (
              <li
                key={todo.id}
                onDoubleClick={() =>
                  dispatch({ type: "REMOVE_TODO", payload: todo.id })
                }
              >
                {todo.description}
              </li>
            ))
          : "No data."}
      </div>
    </div>
  );
}

export default Todo;

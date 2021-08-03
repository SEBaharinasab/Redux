import { useContext } from "react";
import TodoList from "./Components/TodoList/TodoList";
import { TodoContext } from "./Context/TodoContext/TodoContext";

function App() {
  const { dispatch } = useContext(TodoContext);

  const addNewTodo = () => {
    let id = Date.now();
    let title = prompt("title?");
    let description = prompt("description?");
    let checkList = [
      { id: 1, title: "Check 1", isDone: true },
      { id: 2, title: "Check 2", isDone: false },
      { id: 3, title: "Check 3", isDone: true },
    ];
    dispatch({ type: "add_todo", payload: { id, title, description, checkList } });
  };

  return (
    <div className={"App"}>
      <button onClick={addNewTodo}>Add new todo</button>
      <TodoList/>
    </div>
  );
}

export default App;

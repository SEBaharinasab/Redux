import { useReducer } from "react";

const initialState = {
  todoList: [
    {
      id: 1, title: "Title 1", description: "Description 1", checkList: [
        { id: 1, title: "Check 1", isDone: true },
        { id: 2, title: "Check 2", isDone: false },
        { id: 3, title: "Check 3", isDone: true },
      ],
    },
    {
      id: 2, title: "Title 2", description: "Description 2", checkList: [
        { id: 1, title: "Check 1", isDone: false },
        { id: 2, title: "Check 2", isDone: true },
        { id: 3, title: "Check 3", isDone: false },
      ],
    },
    {
      id: 3, title: "Title 3", description: "Description 3", checkList: [
        { id: 1, title: "Check 1", isDone: true },
        { id: 2, title: "Check 2", isDone: false },
        { id: 3, title: "Check 3", isDone: true },
      ],
    },
  ],
};

function reducer( state, action ) {
  console.log(action);

  switch ( action.type ) {
    case "remove_todo":
      return { ...state, todoList: state.todoList.filter(todo => todo.id !== action.payload) };
    case "add_todo":
      return { ...state, todoList: [ ...state.todoList, action.payload ] };
    default:
      return state;
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

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
      {
        state.todoList.map(todo => (
          <div key={todo.id}>
            <hr/>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => dispatch({ type: "remove_todo", payload: todo.id })}>
              delete
            </button>
            <ul>
              {todo.checkList.map(check => (
                <li key={check.id}>{check.title}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;

import React, { createContext, useReducer } from "react";

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
    case "update_isDone_status": {
      return {
        ...state,
        todoList:
          state.todoList.map(todo => todo.id === action.payload.todoId ? {
            ...todo, checkList: todo.checkList.map(check => check.id === action.payload.checkId ? {
              ...check, isDone: !check.isDone,
            } : check),
          } : todo),
      };
    }
    default:
      return state;
  }
}

export const TodoContext = createContext();

function TodoContextProvider( { children } ) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../App";

function TodoList() {
  const { state } = useContext(TodoContext);
  const todoList = state.todoList;
  return (
    // <TodoContext.Consumer>
    //   {value =>
    // value.state.todoList.map(( todo, index ) => (
    todoList.map(( todo, index ) => (
      <TodoItem key={index} todoItem={todo}/>
    ))
    // }
    // </TodoContext.Consumer>
  );
}

export default TodoList;
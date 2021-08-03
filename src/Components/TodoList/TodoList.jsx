import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../Context/TodoContext/TodoContext";

function TodoList() {
  const { state } = useContext(TodoContext);
  const todoList = state.todoList;
  return (
    <>
      {
        todoList.map(( todo, index ) => (
          <TodoItem key={index} todoItem={todo}/>
        ))
      }
    </>
  );
}

export default TodoList;
import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todoList = useSelector(state => state.Todo.todoList);
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
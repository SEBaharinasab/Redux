import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList( { todoList, dispatch } ) {
  return (
    <>
      {
        todoList.map(( todo, index ) => (
          <TodoItem key={index} todoItem={todo} dispatch={dispatch}/>
        ))
      }
    </>
  );
}

export default TodoList;
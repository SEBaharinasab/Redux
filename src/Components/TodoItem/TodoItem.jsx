import React, { useContext } from "react";
import TodoCheck from "../TodoCheck/TodoCheck";
import { TodoContext } from "../../App";

function TodoItem( { todoItem } ) {
  const { dispatch } = useContext(TodoContext);
  return (
    <>
      <div>
        <hr/>
        <h3>{todoItem.title}</h3>
        <p>≻{todoItem.description}</p>
        <button onClick={() => dispatch({ type: "remove_todo", payload: todoItem.id })}>
          delete
        </button>
        <ul>
          {todoItem.checkList.map(check => (
            <TodoCheck
              key={todoItem.id + "" + check.id}
              checkItem={check}
              todoId={todoItem.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoItem;
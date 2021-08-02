import React from "react";
import TodoCheck from "../TodoCheck/TodoCheck";

function TodoItem( { todoItem, dispatch } ) {
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
              dispatch={dispatch}
              todoId={todoItem.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoItem;
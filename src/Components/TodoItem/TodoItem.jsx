import React from "react";
import TodoCheck from "../TodoCheck/TodoCheck";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../Store/Todo.reducer/Todo.actions";

function TodoItem( { todoItem } ) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <hr/>
        <h3>{todoItem.title}</h3>
        <p>≻{todoItem.description}</p>
        <button onClick={() => dispatch(removeTodo(todoItem.id))}>
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
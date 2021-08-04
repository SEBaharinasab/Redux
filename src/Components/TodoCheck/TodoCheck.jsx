import React from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../Store/Todo.reducer/Todo.actions";

function TodoCheck( { checkItem, todoId } ) {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <input
          onChange={() => dispatch(updateStatus(todoId, checkItem.id))}
          type={"checkbox"}
          checked={checkItem.isDone}
        />
        {checkItem.title}
      </label>
    </div>
  );
}

export default TodoCheck;
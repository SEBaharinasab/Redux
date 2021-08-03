import React, { useContext } from "react";
import { TodoContext } from "../../App";

function TodoCheck( { checkItem, todoId } ) {
  const { dispatch } = useContext(TodoContext);

  return (
    <div>
      <label>
        <input
          onChange={() => dispatch({
            type: "update_isDone_status",
            payload: { todoId, checkId: checkItem.id },
          })}
          type={"checkbox"}
          checked={checkItem.isDone}
        />
        {checkItem.title}
      </label>
    </div>
  );
}

export default TodoCheck;
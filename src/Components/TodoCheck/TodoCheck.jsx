import React from "react";

function TodoCheck( { checkItem, dispatch, todoId } ) {
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
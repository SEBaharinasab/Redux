import types from "./Todo.types";

export const addTodo = ( id, title, description, checkList ) => ({
  type: types.ADD_TODO,
  payload: { id, title, description, checkList },
});

export const removeTodo = ( id ) => ({
  type: types.REMOVE_TODO,
  payload: id,
});

export const updateStatus = ( todoId, checkId ) => ({
  type: types.UPDATE_STATUS,
  payload: { todoId, checkId },
});
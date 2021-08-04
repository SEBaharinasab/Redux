import types from "./Todo.types";
import utils from "./Todo.utils";

const initialState = {
  todoList: [
    {
      id: 1, title: "Title 1", description: "Description 1", checkList: [
        { id: 1, title: "Check 1", isDone: true },
        { id: 2, title: "Check 2", isDone: false },
        { id: 3, title: "Check 3", isDone: true },
      ],
    },
    {
      id: 2, title: "Title 2", description: "Description 2", checkList: [
        { id: 1, title: "Check 1", isDone: false },
        { id: 2, title: "Check 2", isDone: true },
        { id: 3, title: "Check 3", isDone: false },
      ],
    },
    {
      id: 3, title: "Title 3", description: "Description 3", checkList: [
        { id: 1, title: "Check 1", isDone: true },
        { id: 2, title: "Check 2", isDone: false },
        { id: 3, title: "Check 3", isDone: true },
      ],
    },
  ],
};

function TodoReducer( state = initialState, action ) {

  switch ( action.type ) {
    case types.REMOVE_TODO:
      return utils.removeTodo(state, action);

    case types.ADD_TODO:
      return utils.addTodo(state, action);

    case types.UPDATE_STATUS:
      return utils.updateStatus(state, action);

    default:
      return state;
  }

}

export default TodoReducer;
const utils = {
  updateStatus( state, action ) {
    return {
      ...state,
      todoList: state.todoList.map(todo => todo.id === action.payload.todoId ? {
        ...todo, checkList: todo.checkList.map(check => check.id === action.payload.checkId ? {
          ...check, isDone: !check.isDone,
        } : check),
      } : todo),
    };
  },
  addTodo( state, action ) {
    return {
      ...state,
      todoList: [ ...state.todoList, action.payload ],
    };
  },
  removeTodo( state, action ) {
    return {
      ...state,
      todoList: state.todoList.filter(todo => todo.id !== action.payload),
    };
  },
};

export default utils;
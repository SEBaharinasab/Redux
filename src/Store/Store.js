import { combineReducers, createStore } from "redux";

import TodoReducer from "./Todo.reducer/Todo.reducer";
// import AuthReducer from "./Auth.Reducer/Auth.Reducer";
// import AnotherReducer from "./Another.Reducer/Another.Reducer";

const RootReducer = combineReducers({
  Todo: TodoReducer,
  // Auth: AuthReducer,
  // Another: AnotherReducer,
});

const Store = createStore(RootReducer);

export default Store;
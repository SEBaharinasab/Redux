# Redux-tool step by step

## Workflow :

### 1) Work with `useState` Hook

```javascript
const [ counter, setCounter ] = useState(0);
setCounter(prev => prev + 1)  // true way
setCounter(prev => prev - 1)  // true way
setCounter('lorem ipsum')     // It works, but using useState like this will cause errors.
```

<hr/>

### 2) Use `useReducer` instead `useState` for more complex states

With `useReducer` we can write functions once and use them multiple time.

With this **hook**:

1) ***errors are reduced***
2) ***code is cleaned***
3) and ***code change is easier***

```javascript
//  Initial State
const initialState = {
  todoList: [ ... ]
}

//  Reducer function
function Reducer( state, action ) {
  switch ( action.type ) {
    case 'find_todo':
      return state.todoList.find(todo => todo.id === action.payload.todoId)
    default:
      state;
  }
}

//  Reducer Usage in Render section
function App() {
  const [ state, dispatch ] = useReducer(Reducer, initialState)
  console.log(dispatch({ type: 'find_todo', payload: { todoId: 1 } }));

  return <>...</>
}
```

<hr/>

### 3) Divide the TodoList section into separate components

```
App.js 
  ⤷ TodoList
    ⤷ TodoItem
      ⤷ TodoCheck
```

When the number of components increases, we should to use
([Drilling Props Down](https://kentcdodds.com/blog/prop-drilling))
or ([Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)).

<hr/>

### 4) Manage Reducers with useContext

To solve the **Props-Drill** problem, we manage the Reducers with `useContext` Hook.

```javascript
/*  App.js  */
export const TodoContext = createContext();

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  value = { state, dispatch }
  return (
    <TodoContext.Provider value={value}>
      <TodoList/>
    </TodoContext.Provider>
  )
}

/*********************************************/
//  TodoList.jsx
const { state } = useContext(TodoContext);

//  TodoItem.jsx
const { dispatch } = useContext(TodoContext);

//  TodoCheck.jsx
const { dispatch } = useContext(TodoContext);

```

visit [this page](https://medium.com/swlh/avoid-prop-drilling-with-react-context-a00392ee3d8) for
more details.

<hr/>

#### 4.1) Clean Code

To Reduce the ~~Complexity~~ and make the code **Cleaner**, The context section and required
functions can be moved to another file, But to use `useContext` in the `app.js` file, you must
import and use `contextProvide` in `index.js`.

```javascript
/*  TodoContext.jsx  */
const initialState = { ... }

function reducer( state, action ) { ... }

export const TodoContext = createContext();

export default function TodoContextProvider( { children } ) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

/*********************************************/
/*  index.js  */

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>  {/* wrap it around App */}
      <App/>
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

/*********************************************/
/*  app.js  */
export default function App() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    //  TodoContext.Provider removed
    <TodoList/>
  );
}

```

<hr/>

### 5) Use Redux instead Context for decrease complexity

All contexts must be entered in the index.js file and used nested. But as the number of contexts
increases, this method itself becomes more complicated!

***This problem is solved by Redux.***

All works starts from `/src/Store` directory

```javascript

/*  /src/Store/Todo.reducer/Todo.reducer.js  */

const initialState = { ... };

function TodoReducer( state = initialState, action ) { ... }

/*********************************************/
/*  /src/Store/store.js  */

//  Import Reducers
import TodoReducer from "./Todo.reducer/Todo.reducer";

//  Combine Reducers as RootReducer
const RootReducer = combineReducers({
  Todo: TodoReducer,
});

//  Create Store for RootReducer
const Store = createStore(RootReducer);
export default Store;

/*********************************************/
/*  /src/index.js  */

import { Provider } from "react-redux";
import Store from "./Store/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>  {/* Provide the store like this. */}
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

```

Redux offers two hooks for access to dispatches and states. `useDispatch` and `useSelector`.

```javascript
const dispatch = useDispatch();
const todoList = useSelector(state => state.Todo.todoList);
```

You can also access the state and dispatch using the `connect()` function, but this function is
Deprecated.

```javascript
function App( { todoList, addTodo } ) { ... }

function mapStateToProps( state ) {
  const { Todo } = state;
  return { todoList: Todo.todoList }
}

function mapDispatchToProps( dispatch ) {
  return {
    addTodo( data ) {
      dispatch({ type: 'add_todo', payload: data })
    }
  }
}

//  only state
export default connect(mapStateToProps)(App);
//  only dispatch
export default connect(null, mapDispatchToProps)(App);
//  both of them
export default connect(mapStateToProps, mapDispatchToProps)(App);

```

<hr/>

### 6) Replace Redux-Toolkit with Redux

> ***Redux-Toolkit*** declared in ***[This](https://github.com/SEBahari/toolkit)*** Repo.
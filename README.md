# Redux-tool step by step

## Workflow :

#### 1) Work with useState Hook

```javascript
const [ counter, setCounter ] = useState(0);
setCounter(prev => prev + 1)  // true way
setCounter(prev => prev - 1)  // true way
setCounter('lorem ipsum')   // It works, but using useState like this will cause errors.
```

<hr/>

#### 2) Use useReducer instead useState for more complex states

With useReducer we can write functions once and use them multiple time.

This hook:

1) reduces *errors*
2) makes the code *cleaner*
3) and makes the code *easier to change*

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

#### 3) Divide the TodoList section into separate components

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

#### 4) Manage Reducers with useContext

To solve the prop-drill problem, we manage the Reducers with useContext Hook.

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

/*  TodoList.jsx  */
const { state } = useContext(TodoContext);

/*  TodoItem  */
const { dispatch } = useContext(TodoContext);

```

visit [this page](https://medium.com/swlh/avoid-prop-drilling-with-react-context-a00392ee3d8)
for more details.

<hr/>

#### 5) Use Redux instead Context for decrease complexity

<hr/>

#### 6) Replace Redux-Toolkit with Redux
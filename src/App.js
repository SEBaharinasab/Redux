import { useState } from "react";

function App() {
  const [ counter, setCounter ] = useState(0);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(prev => prev - 1)}>-1</button>
      <button onClick={() => setCounter(prev => prev + 1)}>+1</button>
    </div>
  );
}

export default App;

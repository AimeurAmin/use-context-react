import { useState, createContext } from 'react';
import './App.css';
import Child1 from './components/Child1';

export const CountContext = createContext(0);

function App() {

  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <div className="App">
        <Child1 />

        <h1>{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
        >Add</button>
      </div>
    </CountContext.Provider>
  );
}

export default App;

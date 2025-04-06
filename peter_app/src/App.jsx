import './App.css';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((count) => count + 1)
  }

  const decrement = () => {
    setCount((count) => count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <div className = 'card'>
      <h2>My count is: {count}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
      </div>
    </div>
  )
}

export default Counter
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [activeColorClass, setActiveColorClass] = useState('warning');

  /**
   * Increment counter value
   */
  const addCount = () => {
    setCounter(counter + 1);
    setActiveColorClass('success');
  }

  /**
   * Decrement counter value
   */
  const removeCount = () => {
    if(counter > 0) {
      setCounter(counter - 1);
      setActiveColorClass('danger');
    }
  }

  /**
   * Reset counter value 0
   */
  const resetCount = () => {
    setCounter(0);
    setActiveColorClass('warning');
  }

  return (
    <>
      <h1>Counter App 🔢</h1>
      <div className="card">
        <h1 className={`txt-${activeColorClass}`}>{counter}</h1>
        <div className='action-wrapper'>
          <button className='success' onClick={addCount}>Add ➕</button>
          <button className='danger' onClick={removeCount}>
            Remove ❌
          </button>
          <button className='warning' onClick={resetCount}>
            Reset 🔃
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

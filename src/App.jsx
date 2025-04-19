import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  const handleAdd = () => {
    if(counter >= 20) {
      setMessage('Counter is already at maximum value');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }
    setCounter(counter + 1);
  }

  const handleRemove = () => {
    if(counter <= 0) {
      setMessage('Counter is already at minimum value');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }

    setCounter(counter - 1);
  }

  return (
    <>
      <div>
        <h2>{message}</h2>
        <h1>{counter}</h1>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
        <div>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  )
}

export default App;

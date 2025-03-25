import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const increaseVal = () => {
    setCounter(counter + 1);
  };

  const decreaseVal = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Program with React</h1>
      <h1>{counter}</h1>
      <button onClick={increaseVal}>Increase Count</button>
      <button onClick={decreaseVal}>Decrease Count</button>
    </>
  );
}

export default App;

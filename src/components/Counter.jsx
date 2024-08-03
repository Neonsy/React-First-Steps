import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countSteps, setCountSteps] = useState(1);

  function increment() {
    setCount(count + countSteps);
  }

  function decrement() {
    setCount(count - countSteps);
  }

  function incrementSteps() {
    setCountSteps(countSteps + 1);
  }

  function decrementSteps() {
    if (countSteps > 1) {
      setCountSteps(countSteps - 1);
    }
  }

  return (
    <>
      <h1>Counter Component</h1>
      <hr />
      <div>
        <h2>Counter value: {count}</h2>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <h2>Counter Steps: {countSteps}</h2>
        <button onClick={decrementSteps}>Decrease Steps</button>
        <button onClick={incrementSteps}>Increase Steps</button>
      </div>
    </>
  );
}

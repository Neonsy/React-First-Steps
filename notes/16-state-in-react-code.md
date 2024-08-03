# State In React Code

In order to create a state, we need to use the `useState` hook.

The `useState` hook is a function that returns an array, with two items in it.
The first item is the state, and the second item is a function that allows to update the state.

> [!NOTE]
> A state of a component should always be declared at the top of the component.

## Code example

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter value: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
```

## Using `count--` or `--count` with `setCount`

- **Current Safe Approach:**

  ```javascript
  setCount(count + 1);
  setCount(count - 1);
  ```

- **Problems with `count--` and `--count`:**

  - `setCount(count--)`:
    - **Issue:** Returns original value before decrementing.
    - **Error:** `Uncaught TypeError: Assignment to constant variable`.
  - `setCount(--count)`:
    - **Issue:** Tries to directly mutates state, against React's rules.
    - **Error:** `Uncaught TypeError: Assignment to constant variable`.

### Why It's Unsafe

- Leads to inconsistent state updates.
- Causes unexpected re-renders.
- Introduces potential bugs.

- **Best Practice:**
  Use functional update form:

  ```javascript
  function decrement() {
    setCount((count) => count - 1);
  }
  ```

### Key Takeaway

Always use the setter function correctly to ensure safe and predictable state updates.

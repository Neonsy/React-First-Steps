# Use Effect Hook

The useEffect hook is a function that allows us to run a function after a component has rendered.

It also reruns the function if the component is re-rendered.

## Arguments

The first argument is the function that will be run.

The second argument is an array of variables that will be used to determine if the function should be run again.

## Example

```jsx
export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return <h1>Counter value: {count}</h1>;
}
```

In the example above, the function will run every time the component is re-rendered.

It also runs every time the `count` variable changes, because it has been added as dependency to the second argument.

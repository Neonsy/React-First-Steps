# Conditionally Rendering

Conditionally rendering is a technique that allows us to render different components based on a condition.

As we return `JSX` from a function, we can use javascript's `if` statement outside of the function the old fashioned way.

```jsx
function ConditionalComponent() {
  const display = true;

  if (display) {
    return (
      <>
        <h2>This is a conditional component</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>Some text</h2>
      </>
    );
  }
}
```

The same can be done with Components:

```jsx
function ConditionalComponent() {
  const display = false;

  if (display) {
    return <Component />;
  } else {
    return <OtherComponent />;
  }
}
```

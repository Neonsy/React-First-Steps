# Conditionals Using Element Variables

Why use Element Variables?

At the moment, we have a conditional statement, that both have return statements.

## What is an Element Variable?

Element variables are variables inside the Component function, that are used to store the JSX elements.

So instead of having two return statements, we can have one, and use the element variable to store the JSX element we want to display.

```jsx
function ConditionalComponent() {
  let message;
  const display = true;

  if (display) {
    message = <h1>Value: true</h1>;
  } else {
    message = <h1>Value: false</h1>;
  }

  return message;
}
```

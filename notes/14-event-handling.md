# Event Handling

Using event handling in react means using the version in camelCase, which is an `JSX` attribute, instead of the javascript version.

Make sure to assign the function name without the parentheses, as it's not a function call.
Otherwise it will call the function, and not pass the event to it.

```jsx
<button onClick={handleClick}>Click to receive a message</button>
```

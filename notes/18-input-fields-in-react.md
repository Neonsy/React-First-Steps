# Input Fields In React

When working with input fields, we need to use the `onChange` event, and the `value` attribute.

That's because react is taking over the input field, and we need to tell it what to do.

```html
<input onChange={handleChange} type='text' value={name} />
```

## Using State

Use the `useState` hook to create a state, and use it in the input field.

```jsx
const [name, setName] = useState('');
```

## Handling Input Fields

The `onChange` event is a function that is called when the input field is changed.

We can but in a function, and use the `event` object to get the value of the input field.

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

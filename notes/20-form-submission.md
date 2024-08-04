# Form Submission

To change the behavior of the form, we need to add an event handler to the submit button.

The event handler will prevent the default behavior of the button, and log the values of the inputs.

```jsx
<button onClick={handleSubmit}>Add</button>
```

```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log(name);
}
```

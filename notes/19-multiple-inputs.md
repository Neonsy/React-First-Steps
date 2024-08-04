# Multiple Inputs

In order to work with multiple inputs and without cluttering the code with multiple useState hooks, we can work with an object.

## Changing the state to an object

```jsx
const [name, setName] = useState({ firstName: '', lastName: '' });
```

An object is a collection of key-value pairs, so we can use that structure to store multiple inputs.

## Adjusting the input fields

To display the values of the inputs, we need to use the `value` attribute, and pass the key of the object.

```html
<input onChange={firstName} type='text' value={name.firstName} placeholder='First Name' />
<input onChange={lastName} type='text' value={name.lastName} placeholder='Last Name' />
```

## Handling the inputs

Now we have to modify the functions to handle the inputs.

We can use the `spread operator`, to create a new object with the old object, and the new value.

```jsx
function firstName(event) {
  setName({ ...name, firstName: event.target.value });
}

function lastName(event) {
  setName({ ...name, lastName: event.target.value });
}
```

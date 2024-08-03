# Components In Loops

In order to do this we need to create a component that will be used in the loop.

The component will be a function that returns a JSX element.

It will take the current item from the array as a prop.

Then we can use the spread operator to pass the props to the component.
This way we don't have to explicitly pass the props to the component, as we use the same names as the properties of the object.

```jsx
function Fruit({ name, color, price, emoji }) {
  return (
    <li>
      <h2 style={{ color: color }}>
        {name} {emoji}
      </h2>
      <p>Price: {price}$</p>
      <p>Color: {color}</p>
      <hr />
    </li>
  );
}
```

```jsx
function Fruits() {
  return (
    <>
      <h1>Fruits</h1>
      <hr />
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} {...fruit} />
        ))}
      </ul>
    </>
  );
}
```

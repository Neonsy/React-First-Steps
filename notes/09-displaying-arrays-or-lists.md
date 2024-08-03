# Displaying Arrays Or Lists

## Using Map for Easy Rendering

So, the `map` function is a very common approach when it comes to rendering arrays in React.
It lets you turn each item in your array into a nice JSX element:

```jsx
const renderFruits = function () {
  return fruits.map((fruit) => <li key={fruit}>{fruit}</li>);
};
```

This method is super clean and easy to read.

## Going for for...of for Performance

Now, if you want to squeeze out some extra performance, try using a `for...of` loop.
It’s a bit more verbose, but it can handle larger arrays better:

```jsx
const renderFruits = function () {
  const fruitElements = [];
  for (const fruit of fruits.entries()) {
    fruitElements.push(<li key={fruit[1]}>{fruit[1]}</li>);
  }
  return fruitElements;
};
```

```jsx
const renderFruits = function () {
  const fruitElements = [];
  for (const [index, fruit] of fruits.entries()) {
    fruitElements.push(<li key={fruit}>{fruit}</li>);
  }
  return fruitElements;
};
```

This way might take a little more code, but it can be more efficient, especially when you're dealing with _tons_ of data.

## JavaScript Loop Performance

Not all loops are created equal in JavaScript.
Here’s a quick rundown of loop performance from fastest to slowest (As far as I know):

1. for loop
2. while loop
3. for...of loop
4. for...in loop
5. forEach method
6. map method

For most projects, you probably won't notice a huge difference unless you're working with massive datasets.

## Don’t Forget About Keys!

When you're rendering lists in React, you need to give each item a unique `key` prop.
This helps React keep track of what’s changed, added, or removed. For example:

```jsx
<li key={fruit.id}>{fruit.name}</li>
```

Using the array index as a key is in itself okay for small lists, but if your list can change, like adding, removing or reordering, it's better to use a unique identifier from your data to avoid any weird behavior.

In the end, choosing between `map` and `for...of` usually comes down to whether you want cleaner code or a bit more performance.
But honestly, for most cases, `map` is the way to go for its clarity and ease of use in rendering lists in React.

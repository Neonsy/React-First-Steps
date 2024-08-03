import Fruit from './Fruit';

export default function Fruits() {
  const fruits = [
    {
      name: 'Apple',
      color: 'Red',
      price: 2.7,
      emoji: '🍎',
    },
    {
      name: 'Banana',
      color: 'Yellow',
      price: 1.8,
      emoji: '🍌',
    },
    {
      name: 'Cherry',
      color: 'Red',
      price: 2.4,
      emoji: '🍒',
    },
    {
      name: 'Mango',
      color: 'Yellow',
      price: 3.69,
      emoji: '🥭',
    },
    {
      name: 'Orange',
      color: 'Orange',
      price: 9.99,
      emoji: '🍊',
    },
    {
      name: 'Peach',
      color: 'Green',
      price: 5.4,
      emoji: '🍑',
    },
    {
      name: 'Pineapple',
      color: 'Red',
      price: 1.2,
      emoji: '🍍',
    },
    {
      name: 'Strawberry',
      color: 'Red',
      price: 3.99,
      emoji: '🍓',
    },
    {
      name: 'Watermelon',
      color: 'Green',
      price: 5.7,
      emoji: '🍉',
    },
  ];

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

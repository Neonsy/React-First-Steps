export default function Fruits() {
  const fruits = [
    'Apple',
    'Banana',
    'Blueberry',
    'Cherry',
    'Mango',
    'Orange',
    'Peach',
    'Pineapple',
    'Strawberry',
    'Watermelon',
  ];

  const renderFruits = function () {
    return fruits.map((fruit) => <li key={fruit}>{fruit}</li>);
  };

  return (
    <>
      <ul>{renderFruits()}</ul>
    </>
  );
}

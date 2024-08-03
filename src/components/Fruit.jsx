export default function Fruit({ name, color, price, emoji }) {
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

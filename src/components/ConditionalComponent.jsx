export default function ConditionalComponent() {
  let message;
  const display = true;

  if (display) {
    message = <h1>Value: true</h1>;
  } else {
    message = <h1>Value: false</h1>;
  }

  return message;
}

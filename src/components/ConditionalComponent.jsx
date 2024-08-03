export default function ConditionalComponent() {
  const display = true;

  if (display) {
    return (
      <>
        <h2>This is a conditional component</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>Some text</h2>
      </>
    );
  }
}

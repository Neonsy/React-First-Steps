const name = 'Gael';

function displayMessage() {
  return "Help! I'm in a function!";
}

function Hello() {
  return (
    <h1>
      Hello! I'm a component! Name Value: {name}; Expression: {5 * 5}; Function: {displayMessage()}
    </h1>
  );
}

export default Hello;

function Hello({ person }) {
  // const { message, name } = props;

  return (
    <>
      <h1>
        {person.message} {person.name}!
      </h1>
      <p>You are {person.age} years old.</p>
      <p>Your favourite numbers are {person.numbers}.</p>
    </>
  );
}

export default Hello;

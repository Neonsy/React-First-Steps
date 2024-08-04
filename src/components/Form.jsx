import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  function handleInput(event) {
    const { name, value } = event.target;

    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <>
      <h1>Form</h1>
      <form>
        <input onChange={handleInput} type='text' name='firstName' value={name.firstName} placeholder='First Name' />
        <input onChange={handleInput} type='text' name='lastName' value={name.lastName} placeholder='Last Name' />
        <button onClick={handleSubmit}>Add</button>
      </form>

      <h2>
        Full Name: {name.firstName} - {name.lastName}
      </h2>
    </>
  );
}

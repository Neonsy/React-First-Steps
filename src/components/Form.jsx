import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  function firstName(event) {
    setName({ ...name, firstName: event.target.value });
  }

  function lastName(event) {
    setName({ ...name, lastName: event.target.value });
  }

  return (
    <>
      <h1>Form</h1>
      <form>
        <input onChange={firstName} type='text' value={name.firstName} placeholder='First Name' />
        <input onChange={lastName} type='text' value={name.lastName} placeholder='Last Name' />
      </form>

      <p>First Name: {name.firstName}</p>
      <p>Last Name: {name.lastName}</p>
    </>
  );
}

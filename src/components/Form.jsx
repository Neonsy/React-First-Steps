import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <h1>Form</h1>
      <form>
        <input onChange={handleChange} type='text' value={name} />
      </form>
    </>
  );
}

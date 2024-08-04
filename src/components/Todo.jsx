import { useState } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');

  return (
    <>
      <form>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </>
  );
}

import { useState } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');

  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </>
  );
}

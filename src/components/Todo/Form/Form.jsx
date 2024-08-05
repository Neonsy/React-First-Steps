import { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: '', completed: false });

    function handleSubmit(event) {
        event.preventDefault();

        // Check if the item that is to be added already exists
        if (!todos.some((arrayTodo) => arrayTodo.name === todo.name) && todo.name !== '') {
            setTodos([...todos, { ...todo, name: todo.name }]);
        }
        setTodo({ ...todo, name: '' });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type='text'
                    value={todo.name}
                    onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                    placeholder='Add Todo Here'
                    className={styles.input}
                    required
                    autoFocus
                />
                <button type='submit' className={styles.button}>
                    Add
                </button>
            </form>
        </>
    );
}

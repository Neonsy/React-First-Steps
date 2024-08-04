import { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type='text'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder='Add Todo Here'
                    className={styles.input}
                />
                <button type='submit' className={styles.button}>
                    Add
                </button>
            </form>
        </>
    );
}

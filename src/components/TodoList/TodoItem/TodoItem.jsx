import styles from './TodoItem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
    function handleDelete(todo) {
        setTodos(todos.filter((item) => item !== todo));
    }

    return (
        <>
            <li className={styles.item}>
                <span className={styles.text}>{todo}</span>
                <button className={styles.deleteButton} onClick={() => handleDelete(todo)}>
                    X
                </button>
            </li>
        </>
    );
}

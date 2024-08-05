import styles from './Footer.module.css';

export default function Footer({ completedTodos, totalTodos, todos, setTodos }) {
    function deleteAll() {
        setTodos([]);
    }

    function clearCompleted() {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <h2>Todos Completed: {completedTodos}</h2>
                    <h2>Total Todos: {totalTodos}</h2>
                </div>
                <div className={styles.actions}>
                    <button onClick={clearCompleted} className={styles.clear}>
                        Clear Completed
                    </button>
                    <button onClick={deleteAll} className={styles.delete}>
                        Delete All
                    </button>
                </div>
            </footer>
        </>
    );
}

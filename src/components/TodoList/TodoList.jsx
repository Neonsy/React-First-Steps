import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, setTodos }) {
    return (
        <>
            <ul className={styles.list}>
                {todos.map((todo) => (
                    <TodoItem key={todo} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </>
    );
}

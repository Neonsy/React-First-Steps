import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, setTodos }) {
    const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

    return (
        <>
            <ul className={styles.list}>
                {sortedTodos.map((todo) => (
                    <TodoItem key={todo.name} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </>
    );
}

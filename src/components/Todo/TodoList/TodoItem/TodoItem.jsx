import styles from './TodoItem.module.css';
import classNames from 'classnames';

export default function TodoItem({ todo, todos, setTodos }) {
    function handleDelete(delTodo) {
        setTodos(todos.filter((todo) => todo.name !== delTodo));
    }

    function toggleCompleted(todo) {
        setTodos(
            todos.map((todoItem) =>
                todoItem.name === todo ? { ...todoItem, completed: !todoItem.completed } : todoItem
            )
        );
    }

    const todoName = classNames(styles.text, {
        [styles.completed]: todo.completed,
    });

    return (
        <>
            <li className={styles.item}>
                <span onClick={() => toggleCompleted(todo.name)} className={todoName}>
                    {todo.name}
                </span>
                <button className={styles.deleteButton} onClick={() => handleDelete(todo.name)}>
                    X
                </button>
            </li>
        </>
    );
}

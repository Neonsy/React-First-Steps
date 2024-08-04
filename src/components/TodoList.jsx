import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo} todo={todo} />
                ))}
            </ul>
        </>
    );
}

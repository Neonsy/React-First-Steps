import { useState } from 'react';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

export default function Todo() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
}

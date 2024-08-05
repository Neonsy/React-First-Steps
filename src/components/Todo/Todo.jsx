import { useState } from 'react';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';

export default function Todo() {
    const [todos, setTodos] = useState([]);

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    return (
        <>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} />
            <Footer completedTodos={completedTodos} totalTodos={totalTodos} todos={todos} setTodos={setTodos} />
        </>
    );
}

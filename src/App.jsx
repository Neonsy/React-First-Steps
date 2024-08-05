import { useReducer } from 'react';

export default function App() {
    const [count, dispatch] = useReducer(countReducer, 0);

    function countReducer(state, action) {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        }
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    );
}

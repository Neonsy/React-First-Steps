import { useState, useMemo } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    const expansiveCalc = () => {
        return Math.random() * 100;
    };

    const expensiveValue = useMemo(() => expansiveCalc(), [count]);

    return (
        <>
            <p onClick={() => setCount(count + 1)}>Count: {count}</p>
            <p>Expensive Value: {expensiveValue}</p>
        </>
    );
}

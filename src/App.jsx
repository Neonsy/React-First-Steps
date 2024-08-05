import { useEffect, useRef } from 'react';

export default function App() {
    const inputRef = useRef();
    const countRef = useRef(0);

    function handleFocus() {
        inputRef.current.focus();
    }

    useEffect(() => {
        console.log(inputRef.current);
    }, []);

    function count() {
        countRef.current++;
        console.log(countRef.current);
    }

    return (
        <>
            <h1>App</h1>
            <input type='text' ref={inputRef} />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={count}>Increment count (log)</button>
        </>
    );
}

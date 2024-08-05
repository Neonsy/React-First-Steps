import { useState } from 'react';
import { ValueContext } from '../ContextExampleParent';
import { useContext } from 'react';

export default function Form() {
    // Local state for the input field
    const [input, setInput] = useState('');

    // Use the context to get the setValue function
    const { setValue } = useContext(ValueContext);

    function handleSubmit(event) {
        event.preventDefault();
        // Update the shared state with the input value
        setValue(input);
        // Clear the input field
        setInput('');
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)} value={input} />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

import Form from './Form/Form';
import ShowValue from './ShowValue/ShowValue';
import { useState, createContext } from 'react';

// Create a context for the value
export const ValueContext = createContext();

export default function ContextExampleParent() {
    // State to hold the shared value
    const [value, setValue] = useState('');

    const contextItems = {
        value,
        setValue,
    };

    return (
        <>
            {/* Provide the context value to all children */}
            <ValueContext.Provider value={contextItems}>
                <h1>Context Example Parent</h1>
                <hr />
                <Form />
                <hr />
                <ShowValue />
            </ValueContext.Provider>
        </>
    );
}

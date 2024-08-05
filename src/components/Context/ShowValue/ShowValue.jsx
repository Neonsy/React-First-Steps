import { useContext } from 'react';
import { ValueContext } from '../ContextExampleParent';

export default function ShowValue() {
    // Use the context to get the current value
    const { value } = useContext(ValueContext);

    return (
        <>
            <h2>Show Value</h2>
            <p>Value: {value}</p>
        </>
    );
}

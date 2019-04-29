import React, { useState } from 'react';

// Example component using hooks
export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>+1</button>
        </div>
    );
};
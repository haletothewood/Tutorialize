import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count using a hook!</button>
        </div>
    );
}

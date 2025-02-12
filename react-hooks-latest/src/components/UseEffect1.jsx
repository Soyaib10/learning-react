import { useState, useEffect } from "react";

function UseEffect1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count changed to: ${count}`);
    }, [count]); // no [] means calls with every render, [] 1 time called, [count] means when count changes rendering heppens

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffect1
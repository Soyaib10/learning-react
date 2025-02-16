import React, {useState, useCallback} from "react";

const UseCallbackChild = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Use callback Child")
    }, [])

    console.log("Parent Rendered")

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>UseCallbackChild</button>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default UseCallbackChild
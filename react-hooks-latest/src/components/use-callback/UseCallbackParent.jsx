import React, {useState} from "react";

function UseCallbackParent() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("Button Clicked!")
    }

    console.log("Parent rendered")

    return (
        <div>
            <h3>UseCallbackParent: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Callback Button</button>
        </div>
    )
}

export default UseCallbackParent
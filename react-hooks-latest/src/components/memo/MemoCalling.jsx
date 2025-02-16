import { useState } from "react"
import Memo from "./Memo"

function MemoCaling() {
    const [count, setCount] = useState(0)
    console.log("memo calling is rendering")

    const increment = () => {
        setCount(count => count + 1)
    } 

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <Memo noOfMessage={count}/> 
            {/* if static value is passed memo will not update but if dynamic value is passed this will be changed */}
        </div>
    )
}

export default MemoCaling
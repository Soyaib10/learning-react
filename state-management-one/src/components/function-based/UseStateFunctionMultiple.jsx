import { useState } from "react";

function UseStateFunctionMultiple() {
    const [name, setName] = useState("Rrid")
    const [age, setAge] = useState(25)

    const incrementAge = () => {
        setAge(age => age + 9)
        setName("Rishan")
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <button onClick={incrementAge}>Increment</button>
            
        </div>
    )
}

export default UseStateFunctionMultiple
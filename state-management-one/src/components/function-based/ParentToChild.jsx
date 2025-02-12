import React, {useState} from "react"

function Parent() {
    const [nameInParent, setName] = useState("Rrid")

    return (
        <div>
            <h1>Parent</h1>
            <Child childProp={nameInParent} />
        </div>
    )
}

function Child({ childProp }) {
    return (
        <div>
            <h2>Child</h2>
            <p>Name from the Parent: {childProp}</p>
        </div>
    )
}

export default Parent
import React from "react";

function EventBubbling() {
    const ParentClick = (event) => {
        console.log("Parent Event: ", event);
    }

    const ChildClick = (event) => {
        event.stopPropagation()
        console.log("Child Event: ", event);
    }

    return (
        <div className="parent" onClick={ParentClick}>
            <h2>Welcome To Bangladesh</h2>
            <button className="child" onClick={ChildClick}>+</button>
        </div>
    )
}

export default EventBubbling
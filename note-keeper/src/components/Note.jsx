import React from "react";
import '/public/styles.css'

function Note(props) {
    return (
        <div className="note">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
} 

export default Note
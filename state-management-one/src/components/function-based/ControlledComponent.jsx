import { useState } from "react";

function ControlledComponent() {
    const [name, setName] = useState("")
    
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Name submitted: " + name);
    };

    return (
        <div>
            <h2>Controlled Component Example</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleName} changes
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ControlledComponent
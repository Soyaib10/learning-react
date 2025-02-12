import React, { useState } from "react";

function Parent() {
    const [ParentMessage, setParentMessage] = useState("");

    const handleParentMessage = (newMessage) => {
        setParentMessage(newMessage);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <Child sendMessage={handleParentMessage} />
            <p>Message from Child: {ParentMessage}</p>
        </div>
    );
}

function Child({ sendMessage }) {
  const ChildHandleClick = () => {
    sendMessage("Hello from Child!");  
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => sendMessage('adad')}>Send Message to Parent</button>
    </div>
  );
}

export default Parent
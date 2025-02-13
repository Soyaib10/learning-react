import React from "react";
import ThemedButton from "./ThemedButton";

function Toolbar(theme, toggleTheme) {
    return (
        <div>
            <ThemedButton theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Toolbar
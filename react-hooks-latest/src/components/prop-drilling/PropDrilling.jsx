import React, {useState} from "react";
import Toolbar from "./Toolbar";

function PropDrilling() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme => (theme === "light" ? "dark" : "light"))
    }

    return (
        <div>
            <Toolbar theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default PropDrilling
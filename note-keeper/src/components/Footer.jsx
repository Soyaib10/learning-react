import React from "react"

function Footer() {

    const copyright = "Zihad"
    const date = new Date().getFullYear()
    return (
        <footer>
            <p>COPYIGHT @{copyright + " " + date}</p>
        </footer>
    )
}

export default Footer
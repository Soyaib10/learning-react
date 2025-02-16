import { memo } from "react"

function Memo({noOfMessage}) {
    console.log("From memo")
    return ( 
        <div>
            <h3>I am {noOfMessage} from memo</h3>
        </div>
    )
}

export default memo(Memo)
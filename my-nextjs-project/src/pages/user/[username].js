import { useRouter } from "next/router"

const Username = () => {
    const {query} = useRouter()
    return (
        <div>
            <h2>This is {query.username} </h2>
        </div>
    )
}
export default Username
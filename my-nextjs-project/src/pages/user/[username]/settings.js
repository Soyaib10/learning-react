// user->zihad->settings

const { useRouter } = require("next/router")

const Page = () => {
    const {query} = useRouter()
    return (
        <div>
            <h2>This settings page is for {query.username}</h2>
        </div>
    )
}

export default Page
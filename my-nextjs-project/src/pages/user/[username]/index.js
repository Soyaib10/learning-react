// user->zihad

const { useRouter } = require("next/router")

const Page = () => {
    const router = useRouter()
    return (
        <div>
            <h2>This username page is for {router.query.username}</h2>
            {/* <button onClick={(e) => router.push(`/user/${router.query.username}/settings`)}>Open Settings</button> */}

            <button onClick={() =>
                router.push({
                    pathname: "/user/[username]/settings",
                    query: { username: router.query.username },
                })
            }>
                Open settings button
            </button>
            <button onClick={e => router.reload()}>Reload</button>
        </div>
    )
}

export default Page
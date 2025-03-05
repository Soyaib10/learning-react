// user->zihad->settings
const { useRouter } = require("next/router")

const Settings = () => {
    const router = useRouter()

    return (
        <div>
            <h2>This settings page is for {router.query.username}</h2>
        </div>
    )
}

export default Settings
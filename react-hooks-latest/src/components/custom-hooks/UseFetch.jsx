import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [url])

    return {data, loading, error}
}

export default useFetch
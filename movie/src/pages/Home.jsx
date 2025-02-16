import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Home() {
    const [searchQuery, setsearchQuery] = useState("")
    const movies = [
        {id: 1, title: "Hello Brothers", release_date: "2034"},
        {id: 2, title: "Hello Brothers", release_date: "2034"},
        {id: 3, title: "Hello Brothers", release_date: "2034"},
        {id: 4, title: "Hello Brothers", release_date: "2034"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setsearchQuery("............")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for movies...."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                />
            <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((i) => (
                    <MovieCard movie={i} key={i.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
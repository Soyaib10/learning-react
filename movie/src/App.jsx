import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 2
  return (
    <>
      {movieNumber === 1 && <MovieCard movie={{title: "The main", release_date: "2024"}}/>}
      {movieNumber === 2 && <MovieCard movie={{title: "The role", release_date: "2044"}}/>}
    </>
  )
}

export default App

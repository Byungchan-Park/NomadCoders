import React, { useEffect, useState } from "react"
import axios from "axios"
import Movie from "./Movie"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const {
      data: { movies },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating").then((response) => response.data)
    console.log(movies)
    setMovies(movies)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      {isLoading
        ? "Loading..."
        : movies.map((movie) => <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />)}
    </div>
  )
}
export default App

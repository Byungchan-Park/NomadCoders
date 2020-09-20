import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])
  return <div>{isLoading ? "Loading..." : "We are ready"}</div>
}
export default App

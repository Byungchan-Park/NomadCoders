import React, { useEffect } from "react"
import "./Detail.css"

function Detail({ location: { state }, history: { push } }) {
  useEffect(() => {
    if (state === undefined) {
      push("/")
    }
  }, [])

  if (state) {
    return (
      <section className="movieDetail">
        <img src={state.poster} alt="title" title="title" />
        <div className="movieDetail__data">
          <h3 className="movieDetail__title">Movie title : {state.title}</h3>
          <h5 className="movieDetail__year">Opening year : {state.year}</h5>
          <ul className="movieDetail__genres">
            <strong>Genres :</strong>
            {state.genres.map((genre, index) => (
              <li key={index} className="movieDetail__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movieDetail__summary">
            <strong>Summary</strong>
            {state.summary}
          </p>
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default Detail

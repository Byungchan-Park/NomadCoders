import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
  return (
    <div className="navigation">
      <h1 className="navigation__logo">
        <Link to="/">My Movie App</Link>
      </h1>

      <Link
        to={{
          pathname: "/about",
          state: {
            fromNavigation: true,
          },
        }}
      >
        About
      </Link>
    </div>
  )
}

export default Navigation

import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </Router>
  )
}

export default App

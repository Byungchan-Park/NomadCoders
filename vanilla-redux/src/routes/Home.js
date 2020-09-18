import React, { useState } from "react"
import { connect } from "react-redux"
import ToDo from "../components/ToDo"
import { actionCreators } from "../store"

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("")
  function onChange(e) {
    setText(e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault()
    addToDo(text)
    setText("")
  }
  localStorage.setItem("toDos", JSON.stringify(toDos))
  // Every time Home component is rerendered as state of Redux store changes, toDos data is saved in the localStorage.
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  )
}

// literally get current Redux state from Redux store to Component
// it is so-called mapStateToProps
// first argument : current state of Redux store
// second argument : Component's own props
function mapStateToProps(state) {
  return { toDos: state.toDos }
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

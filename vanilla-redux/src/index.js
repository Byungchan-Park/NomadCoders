// ***** TodoList with Redux *****
import { createStore } from "redux"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

// Action Type
const ADD_TO_DO = "ADD_TO_DO"
const DELETE_TO_DO = "DELETE_TO_DO"

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DO:
      const newToDoObj = { id: Date.now(), text: action.text }
      return [...state, newToDoObj]
    case DELETE_TO_DO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id)
      return cleaned
    default:
      return state
  }
}

const store = createStore(reducer)

// Action Creators
const addToDo = (text) => {
  return { type: ADD_TO_DO, text }
}

const deleteToDo = (id) => {
  return { type: DELETE_TO_DO, id }
}

// Dispatch
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  // raw data is string. need to change to number.
  store.dispatch(deleteToDo(id))
}

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ""
  toDos.forEach((toDo) => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.append(btn)
    ul.appendChild(li)
  })
}

// Every time Redux state changes, paintToDos is invoked.
store.subscribe(paintToDos)

const onSubmit = (e) => {
  e.preventDefault()
  const toDo = input.value
  input.value = ""
  dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

// createAction
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")
console.log(addToDo.type) // "ADD"
console.log(deleteToDo.type) // "DELETE"
console.log(addToDo()) // {type:"ADD", payload: undefined}
console.log(deleteToDo()) // {type:"DELETE", payload: undefined}

// define initial State of Redux store
// when page is refreshed, then refer the data which is stored in the localStorage.
const defaultState = JSON.parse(localStorage.getItem("toDos")) || []

// createReducer
// has two options
// first option : mutate original state
// when you mutate something, you should not return.
// second option : returns an new state
// when you return something, it should be a new state here.
// ? Redux and Immer works.
const reducer = createReducer(defaultState, {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteToDo]: (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload)
  },
})

// configureStore basically allow user use Redux Developer Tools.
const store = configureStore({ reducer })

export const actionCreators = {
  addToDo,
  deleteToDo,
}

export default store

import { createStore } from "redux"

// action type
const ADD = "ADD"
const DELETE = "DELETE"

// action creators: it returns an action object
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  }
}

// define initial State of Redux store
// when page is refreshed, then refer the data which is stored in the localStorage.
const defaultState = {
  toDos: JSON.parse(localStorage.getItem("toDos")) || [],
}

// reducer : it changes currentState with dispatched action to a new State. 
// return state must be immutable 
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: state.toDos.concat({ text: action.text, id: Date.now() }),
      }
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.id),
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addToDo,
  deleteToDo,
}

export default store

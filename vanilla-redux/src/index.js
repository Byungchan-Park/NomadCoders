// ***** Counter with Redux *****
import { createStore } from "redux"

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "ADD"
const MINUS = "MINUS"

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}

const countStore = createStore(countModifier)

countStore.subscribe(() => {
  number.innerText = countStore.getState()
})

plus.addEventListener("click", () => countStore.dispatch({ type: ADD }))
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }))

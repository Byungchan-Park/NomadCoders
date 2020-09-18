import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { actionCreators } from "../store"

function ToDo({ id, text, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  }
}
// This is the combination with dispatch and ownProps.
// ToDo component already have id value from props. so we can use by using the argument ownProps.

export default connect(null, mapDispatchToProps)(ToDo)

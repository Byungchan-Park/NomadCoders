# Movie App 2020

## React JS Fundamentals

## Learning Records

### What is the React? and What does React do?
```jsx
ReactDOM.render(<App />, document.getElementById("root"))
```

React is trying to put App Component(and many Child Components) inside of document.getElementById("root").
in index.js file, any HTML codes do not exist. React pushes HTML code into the HTML source code by using Virtual DOM.
React use virtual DOM so the codes which React pushes into the index.html do not visible.

React doesn't put HTML into the HTML source code for the first time and knows how to add or remove HTML in HTML.
React translates Component into normal plain HTML code and push it into the HTML source code.
React use JSX grammar. JSX is an HTML inside of JavaScript.

React works with Component.
Component shows the data. Component is a function which returns HTML.
When you want to write HTML using React, you need to use Component.

Component is able to include other Component.

### Props

```jsx
import React from "react"

function Food(props) {
  return <h1>I like kimchi</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" price="$50" />
    </div>
  )
}
```

The data Flow in React is from Parent Component to Child Component.
Inside of the Parent Component, you write the code which is the type of key=value inside of Child Component tag.
Then the Child Component receives the data from Parent Component as a first argument which is named Props. And it is an object.

### Map function to deal with dynamic data
Map function takes an array and returns an array. The parameter of Map function is a function which is applied to every elements in an array.
And return value of each loop becomes a new Array's element. 

key value is react internal use.

### What is Prop-types?
Prop-types is going to allow me to check whether the props that I'm getting are the props that I want or not.

### class in JavaScript
class App extends React.Component
=> Our App Component is trying to get all the things from React Component.

### What is state and cannot mutate directly?
props is an readOnly value so the child Component cannot mutate props.
but, state is an inner data of its own Component and mutable. It changes inside of its own component.
If we mutate the state directly, React is not going to invoke render function in the Class Component.
Instead of mutating the state directly, you need to use setState function.
Every time you invoke setState function, react will invoke render function with new state.

### Life Cycle in Class Component
when the component is rendered for the first time, invoke the Component at first, invoke render function, and after rendering is completed, componentDidUpdate would be executed. 
when you invoke setState, invoke the Component, invoke render function, and after updating is completed, componentDidUpdate would be executed.

in ComponentDidMount(in Class Component) or in useEffect(in Fuction Component), we are going to fetch the data. And if the data fetching from the API is completed, we are going to remove loading window and show movie datas.

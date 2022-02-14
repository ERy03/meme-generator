# Notes

What's one problem we face in React?

Take the following example:

``` javascript
function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray)
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Everytime a user clicks on the 'Add Item' button, it should trigger the `addItem` function which will add a `newThingText` (Thing 3) into the `thingsArray`. `console.log(thingsArray)` is showing `["Thing 1","Thing 2","Thing 3"]` Great! However, 'Thing 3' is not displayed on the screen 😱 Why???

-> React doesn't know it should rerender our updated `thingsArray` containing the new "Thing 3". In other words `{thingsElements}` will always be `thingsElements` mapping the two things (Thing 1" and "Thing 2") from the declared `thingsArray`.

Well you might be thinking 🤔 what if we move line 3 `const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)` below our `function addItem()`. However, this will not work because React only runs this code one time when the App component is being rendered.

Okay... you might also be thinking 🤔 what if we write vanilla JS inside our `addItem()` function? Getting the document element and pushing a new paragraph element into the list. Yea... but luckily React is a declarative framework! And we have React State for that!

Example above using React State:

``` javascript
function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### React State

What is state?
`A way for React to remember saved values from within a component.`

Many confuse props and state in React.

Table: | Props | State |
--------|-------|-------|
definition | `properties passed into a component in order to configurate, similar to how a function receives parameters. A component receiving props is not allowed to modify those props => immutable` | `values that are managed by the component, similar to variable declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.` |

Take the following example using plain vanilla JS.

``` javascript
function greeting(name) {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))
```

Here we have a function `greeting(name)`. It takes a name as a parameter and returns a message based on the time of day. `name` is something we don't want to change inside our function. It's the argument that the user passes into our function. However, `date` ,`hours` and `timeOfDay` are variables that we can change inside our function. Usually these variables that are created inside our function or components are handled with state.

### useState

What is `useState`?
`useState` is a React Hook that lets you declare a state variable.

what is a React Hook?
A function that lets you “hook into” React state and lifecycle features from function components.

2 ways to write `useState`

```javascript
// ①
import React, { useState } from 'react'

const result = useState("Hello")

// - - - - - - - - - - - - - - - - - - - -

// ②　More common
const result = React.useState("Hello")

console.log(result) // [Hello, setState] returns an array with the current state and a function to update the state
```

How to get the values from `useState`?
We can use array destructuring to get the values from `useState`.

```javascript
const [value, func] = useState("Hello")
console.log(value) // Hello
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import React from "react";
import ReactDOM from "react-dom/client"

// React Element
const heading = (
    <h1 className="heading">
        Namaste React header
    </h1>
)

// React Component -  Everything in React is a component

// Functional Component - Normal JavaScript function which returns some piece of JSX.
const HeadingComponent1 = () => {
    return <h1>Namaste React Functional Component1 Heading</h1>
}
// Optimized version
const HeadingComponent2 = () => <h1>Namaste React Functional Component2 Heading</h1>

// ComponentComposition - Combining two components - Nested Components

const HeadingComponent = () => (
    <div id="container">
        {/* {<HeadingComponent2></HeadingComponent2>} */}
        {/* {<HeadingComponent2 />} */}
        {/* {HeadingComponent1()} */}
        {heading}
        <h1>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)

import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h1",{},"Hello World from React!!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

{/* <div id='parent'>
    <div id="child1">
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
    </div>
    <div id="child2">
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
    </div>
</div> */}

const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{ id:"child1"},[
        React.createElement("h1",{},"Hello World from C1H1!!"),
        React.createElement("h1",{},"Hello World from C1H2!!")
    ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"Hello World from C2H1!!"),
            React.createElement("h1",{},"Hello World from C2H2!!")
        ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

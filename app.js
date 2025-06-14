import React from 'react';
import ReactDOM from 'react-dom/client';
// it's from core react.createElement
let heading = document.createElement("h1")
heading.textContent = "Hello from js"
document.getElementById("root").appendChild(heading)

let react_heading = React.createElement("h1", { id: "heading" }, "Hello from React");

let parent_element = React.createElement("div", {
    id: "parent"
},
    [
        React.createElement("div", {
            id: 'child1'
        },
            [
                React.createElement("h1", {}, "This is h1"),
                React.createElement("h2", {}, "This is h2")
            ]
        )
    ],
    [
        React.createElement("div", {
            id: 'child2'
        },
            [
                React.createElement("h1", {}, "This is h1"),
                React.createElement("h2", {}, "This is h2")
            ]
        )
    ],
)
let root = ReactDOM.createRoot(document.getElementById("root"));
// It's by JSX =>React.createElement() by babel =>ReactElement=js object=>HTML by render from ReactDOM

// single line jsx
// const jsxHeading=<h1 id="heading">Hello by jsx</h1>

// multi line jsx converted the React element to React component by capitalize and use functional component .
const JsxHeading = () => (
    <h1 id="heading">Hello by jsx</h1>
)
// component composition adding 1 component with another component .
const expres="Hello show expression by  {}"
const FunctionalCompo = () => {
    return (
        <div>
            {expres}
            <JsxHeading />
            <h1>Hello by Functional components</h1>
        </div>
    )
}
root.render(<FunctionalCompo/>)

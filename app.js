let heading = document.createElement("h1")
heading.textContent = "Hello from js"
document.getElementById("root").appendChild(heading)

let react_heading = React.createElement("h1", { id: "heading" }, "Hello from React")
let root = ReactDOM.createRoot(document.getElementById("root"))

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
root.render(parent_element)

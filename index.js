import React from "react"
import ReactDOM from "react-dom"
import CardOuter from "./components/CardOuter";

function App() {
    return (
        <div className="card--border">
            <CardOuter/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
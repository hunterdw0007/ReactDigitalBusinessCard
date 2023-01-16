import React from "react"
import ReactDOM from "react-dom"
import CardInner from "./components/CardInner"
import CardFooter from "./components/CardFooter"

function App() {
    return (
        <main>
            <img className="personal-photo col-lg-4 col-sm-9" src="./assets/IMG_2752.jpg"></img>
            <CardInner/>
            <CardFooter/>
        </main>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
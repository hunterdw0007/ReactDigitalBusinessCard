import React from "react"
import CardInner from "./CardInner"
import CardFooter from "./CardFooter"

export default function CardOuter() {
    return (
        <main>
            <img className="personal-photo" src="./assets/IMG_2752.jpg"></img>
            <CardInner/>
            <CardFooter/>
        </main>
    )
}
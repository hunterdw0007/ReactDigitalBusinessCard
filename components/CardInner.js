import React from "react"

export default function CardInner() {
    return (
        <div className="card--inner container">
            <h1 className="card--name
            ">Hunter Westerlund</h1>
            <p className="card--jobtitle">Software Engineer</p>
            <a className="card--website" href="#">Personal Website</a>
            <div className="card--buttons">
                <a className="btn btn-light button--email" href="mailto:hwesterlund@proton.me">
                    <i className="fa fa-envelope"></i> Email
                </a>
                <a className="btn btn-primary button--linkedin" href="https://www.linkedin.com/in/hunter-westerlund-51707a185/">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>
            <h5 className="card--section">
                About
            </h5>
            <p className="card--text">
                I am a recent graduate of Auburn University. I want to get a job doing .NET development as well as React so I am taking
                this course.
            </p>
            <h5 className="card--section">
                Interests
            </h5>
            <p className="card--text">
                Being outdoors. Living healthy. Vinyl records. FOSS advocate.
            </p>
        </div>
    )
}
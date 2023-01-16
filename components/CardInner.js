import React from "react"

export default function CardInner() {
    return (
        <div className="card--inner col-lg-4 col-sm-9">
            <h1 className="card--name
            ">Hunter Westerlund</h1>
            <p className="card--jobtitle">Software Engineer</p>
            <a className="card--website" href="#">Personal Website</a>
            <div className="card--buttons">
                <a className="btn btn-light button--email" href="https://github.com/hunterdw0007">
                    <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a className="btn btn-primary button--linkedin" href="https://www.linkedin.com/in/hunter-westerlund-51707a185/">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>
            <hr/>
            <h5 className="card--section">
                About
            </h5>
            <p className="card--text">
                Auburn University class of '22. Interested in full-stack development. I have experience with .NET and I am learning React and Rust.
            </p>
            <h5 className="card--section">
                Interests
            </h5>
            <p className="card--text">
                If I'm not staring at code I'm usually outside or working on my Jeep. I like collecting vinyl records and LEGO. I enjoy reading classics and ancient history.
            </p>
        </div>
    )
}
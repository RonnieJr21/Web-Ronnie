import React from "react";
import './navbar.css'

const MyNavbar = () => {
    return(
        <div className="navbar">
            <span><a className="Home" href={"http://localhost:3000/"} > Home Page </a></span>

            <span><a className="Projects" href={"/projects"} > Projects </a></span>

            <span><a className="AboutMe" href="http://localhost:3000/about-me" > About me </a></span>

            <span><a className="Skills" href="./Skills/Skills.html"> Skills </a></span>

            <span><a className="contact" href="./Contact-Me/Contact-Me.html">Contact Me</a></span>

        </div>
    );
}

export default MyNavbar
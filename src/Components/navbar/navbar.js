import React from "react";
import './navbar.css'

const MyNavbar = () => {
    return(
        <div className="navbar">
            <span><a className="Home" href={process.env.PUBLIC_URL + "/"} > Home Page </a></span>

            <span><a className="Projects" href={process.env.PUBLIC_URL + "/projects"} > Projects </a></span>

            <span><a className="AboutMe" href={process.env.PUBLIC_URL + "/about-me"} > About me </a></span>

            <span><a className="Skills" href="./Skills/Skills.html"> Skills </a></span>

            <span><a className="contact" href={process.env.PUBLIC_URL + "/contact-me"}>Contact Me</a></span>

        </div>
    );
}

export default MyNavbar
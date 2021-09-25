import React from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import Logo2 from "../../images/Logo2.png"
import "./NavBar.css"

export const NavBar = () => {
    return (
        
        <ul className="navbar">
            <li className="logo-name navbar__item">
                <Link className="navbar__link" to="/">
                    <img src={Logo2} />
                </Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/ideas">Ideas</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/completedIdeas">Completed Ideas</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/artists">Artists</Link>
            </li>
        </ul>
    )
}
import React from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/ideas">Ideas</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/artists">Artists</Link>
            </li>
        </ul>
    )
}
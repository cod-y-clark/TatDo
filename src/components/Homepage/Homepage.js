import React, { useState } from "react";
import "./Homepage.css"
import Logo from "../../images/Logo.png"

export const HomePage = () => {
    
    return (

        <section className="homePage">
            <div className="logo-div">
                <img className="logo" src={Logo} />
            </div>
        </section>
    )
}
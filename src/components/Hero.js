import React from "react";
import logo from "./images/photo-grid.png"
export default function Hero()
{
    return (
        <section className="Hero">
        <img src={logo} alt="Herologo" className="Hero-image"></img>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
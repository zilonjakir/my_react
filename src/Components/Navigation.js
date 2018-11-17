import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink className="menuBar" to="/">Home</NavLink>
            <NavLink className="menuBar" to="/about">About</NavLink>
            <NavLink className="menuBar" to="/contact">Contact</NavLink>
            <NavLink className="menuBar" to="/watch">Watch</NavLink>
            <NavLink className="menuBar" to="/user">Users</NavLink>
            <NavLink className="menuBar" to="/modal">Modal</NavLink>
        </div>
    )
}

export default Navigation;
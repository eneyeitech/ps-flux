import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink> | <NavLink href="/courses">Courses</NavLink> | <NavLink href="/about">About</NavLink>
        </nav>
    );
}

export default Header;
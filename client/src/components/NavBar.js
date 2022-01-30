import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    
    const link = document.querySelector('.link-button')

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/try-to-change">Try To Change</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
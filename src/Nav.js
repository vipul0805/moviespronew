import React from "react";
import "./App.css";

import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="link-class" to="/about">
                    <li>About</li>
                </Link>
                <Link className='link-class' to="/shop">
                    <li>Shop</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;

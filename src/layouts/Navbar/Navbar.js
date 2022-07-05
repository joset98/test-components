import React, { useState } from "react";
import "../../App.css";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);

    const showHandler = () => {
        setShowLinks( prevState => !prevState);
    }

    return (
        <div className="navbar">

            <div className="leftSide">

                <nav className="links" id={showLinks ? 'hidden': ''}>
                    <a href="/home">
                        Home
                    </a>
                    <a href="/feedback">
                        Feedback
                    </a>
                    <a href="/about-us">
                        About us
                    </a>
                    <a href="/contact">
                        Contact
                    </a>
                </nav>

                <button onClick={showHandler}>
                    show
                </button>
            </div>

            <div className="rightSide">
                <input type="text" placeholder="Search" >
                </input>
                <button>
                    Search
                </button>
            </div>

        </div>
    )
}

export default Navbar;
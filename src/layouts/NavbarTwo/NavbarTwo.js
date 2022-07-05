import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavbarTwo = () => {
    const [show, setShow] = useState(true); 

    const showMenuHandler = () => setShow( prev => !prev);

    return (
        <main className={show ? 'space-toggle': null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className="header-toggle" onClick={showMenuHandler}>
                    <i className="fa-solid fa-bars"></i>

                </div>
            </header>

            <aside className={show ? 'sidebar show': 'sidebar'}>
                <nav className="nav">
                    <div>
                        <a href={'/'} className="nav-logo">
                            <i className="fa-solid fa-house nav-logo-icon"></i>
                            <span className="nav-logo-name">
                                Homepage
                            </span>
                        </a>
                    </div>
                    
                    <div className="nav-list">
                        <a href={'/'} className="nav-link active">
                            <i className="fa-solid fa-gauge-high nav-link-icon"></i>
                            <span className="nav-link-name">
                                Dashboard
                            </span>
                        </a>

                        <a href={'/'} className="nav-link">
                            <i className="fas fa-hotel nav-link-icon"></i>
                            <span className="nav-link-name">
                                Hotel
                            </span>
                        </a>

                        <a href={'/'} className="nav-link">
                            <i className="fas fa-image nav-link-icon"></i>
                            <span className="nav-link-name">
                                Gallery
                            </span>
                        </a>

                        <a href={'/'} className="nav-link">
                            <i className="fas fa-dollar-sign nav-link-icon"></i>
                            <span className="nav-link-name">
                                Transactions
                            </span>
                        </a>

                        <a href={'/'} className="nav-link">
                            <i className="fas fa-sign-out nav-link-icon"></i>
                            <span className="nav-link-name">
                                Logout
                            </span>
                        </a>

                    </div>

                </nav>
            </aside>
        </main>
    )

}

export default NavbarTwo;
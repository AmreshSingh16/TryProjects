import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState}from "react";
import {Link} from 'react-router-dom';

function Header() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <header>
        <div style={{"position":"relative"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">TryProjects</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </header>
    );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaQuoteRight, FaQuestionCircle, FaUserShield, FaInfoCircle, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons library
import '../styles/NavBar.css';

// Close the navbar when a link is clicked
const closeNavbar = () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
};

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom border-white">
                <div className="container">
                    <Link to="/" className="navbar-brand" onClick={closeNavbar}>BlindWings</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0"> {/* Aligned to the right */}
                            <li className="nav-item">
                                <Link to="/home" className="nav-link px-3" onClick={closeNavbar}>
                                    <FaHome /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quotes" className="nav-link px-3" onClick={closeNavbar}>
                                    <FaQuoteRight /> Quotes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faqs" className="nav-link px-3" onClick={closeNavbar}>
                                    <FaQuestionCircle /> FAQs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/privacy" className="nav-link px-3" onClick={closeNavbar}>
                                    <FaUserShield /> Privacy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link px-3" onClick={closeNavbar}>
                                    <FaInfoCircle /> About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://github.com/rushiharkal1" className="nav-link px-3" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>
                                    <FaGithub /> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

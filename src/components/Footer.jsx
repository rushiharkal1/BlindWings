import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaQuoteRight, FaQuestionCircle, FaUserShield, FaInfoCircle, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons library
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="container-fluid bg-dark text-light">
                <hr />
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link px-2">
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quotes" className='nav-link px-2'>
                                <FaQuoteRight /> Quotes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faqs" className="nav-link px-2">
                                <FaQuestionCircle /> FAQs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/privacy" className="nav-link px-2">
                                <FaUserShield /> Privacy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link px-2">
                                <FaInfoCircle /> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/rushiharkal1" className="nav-link px-3" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </a>
                        </li>                        
                    </ul>
                    <p className="text-center text-light">&copy; {currentYear} BlindWings</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;

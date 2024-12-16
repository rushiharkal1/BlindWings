import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-2">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/features" className="nav-link px-2">
                                Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faqs" className="nav-link px-2">
                                FAQs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/privacy" className="nav-link px-2">
                                Privacy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link px-2">
                                About
                            </Link>
                        </li>
                    </ul>
                    <p className="text-center text-light">&copy; 2024 BlindWings</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;

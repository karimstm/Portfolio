import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelopeOpen, faBlog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <Navbar className="header" >
            <Nav className="ml-auto flex-column icon-menu">
                <Nav.Item className="icon-box active">
                    <FontAwesomeIcon className="p-icon" icon={faHome}  />
                    <Link className="nav-link" to="/"><h2>Home</h2></Link>
                </Nav.Item>
                <Nav.Item className="icon-box">
                    <FontAwesomeIcon className="p-icon" icon={faUser}  />
                    <Link className="nav-link" to="/about"><h2>About</h2></Link>
                </Nav.Item>
                <Nav.Item className="icon-box">
                    <FontAwesomeIcon className="p-icon" icon={faBriefcase}  />
                    <Link className="nav-link" to="/portfolio"><h2>Portfolio</h2></Link>
                </Nav.Item>
                <Nav.Item className="icon-box">
                    <FontAwesomeIcon className="p-icon" icon={faEnvelopeOpen} />
                    <Link className="nav-link" to="/contact"><h2>Contact</h2></Link>
                </Nav.Item>
                <Nav.Item className="icon-box">
                    <FontAwesomeIcon className="p-icon" icon={faBlog}  />
                    <Link className="nav-link" to="/blog"><h2>Blog</h2></Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Header;
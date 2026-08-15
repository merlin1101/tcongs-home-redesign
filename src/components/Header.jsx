import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header () {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <>
        <header>
            <div className='content'>
                <Navbar expand="lg" className="app-navbar">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img src={ logo } alt='MERLIN' /></Navbar.Brand>
                        <button
                            className={`custom-hamburger ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle navigation"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </Container>
                </Navbar>

                <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                    <button className="side-menu-close" onClick={closeMenu} aria-label="Close menu">×</button>
                    <Nav className='side-nav'>
                        <Nav.Link as={Link} to='/' onClick={closeMenu}>Home</Nav.Link>
                        <Nav.Link as={Link} to='#' onClick={closeMenu}>Company</Nav.Link>
                        <Nav.Link as={Link} to='#' onClick={closeMenu}>Services</Nav.Link>
                        <Nav.Link as={Link} to='#' onClick={closeMenu}>Connect</Nav.Link>
                    </Nav>
                </div>
                <button>Let's Connect</button>
                {menuOpen && <div className="side-menu-overlay" onClick={closeMenu} />}
            </div>
        </header>
        </>
    )
}

export default Header

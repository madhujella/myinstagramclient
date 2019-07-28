import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigationbar = (props) => {

    let isLoggedIn = false;
    let navLinks = null;
    if (isLoggedIn) {
        navLinks = (
            <Nav>
                <Nav.Link href="/mainpage">me</Nav.Link>
                <Nav.Link href="/settings">settings</Nav.Link>
                <Nav.Link href="/">logout</Nav.Link>
            </Nav>
        )
    }

    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MyInstagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    {navLinks}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigationbar;
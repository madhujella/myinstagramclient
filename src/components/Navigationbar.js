import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigationbar = (props) => {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="/">MyInstagram</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="">
                    <Nav.Link href="/mainpage">me</Nav.Link>
                    <Nav.Link href="/settings">settings</Nav.Link>
                    <Nav.Link href="/">logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;
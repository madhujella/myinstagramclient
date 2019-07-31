import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

const Navigationbar = (props) => {

    let navLinks = null;
    if (props.isLoggedIn) {
        navLinks = (
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/mainpage">me</Nav.Link>
                    <Nav.Link href="/logout">logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        )
    }

    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MyInstagram</Navbar.Brand>
                {props.isLoggedIn ? <Navbar.Toggle aria-controls="basic-navbar-nav" /> : null}
                {navLinks}
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, null)(Navigationbar);
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const Register = (props) => {
    return (
        <div className="authWrapper">
            <h2 className="text-center">myInstagram</h2>
            <Row>
                <Col sm={6} className={"offset-sm-3"} >
                    <Form onSubmit={(e) => {
                        console.log(e, 'register')
                        e.preventDefault()
                        e.stopPropagation()
                    }}>
                        <Form.Text>{props.error}</Form.Text>

                        <Form.Group controlId="registerEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="registerUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="registerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>

                        <Form.Group controlId="registercPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button className="text-center" variant="primary" type="submit">Sign Up</Button>
                    </Form>
                </Col>
            </Row>
            <Link to="/login">Login</Link>
        </div>

    )
}

export default Register;
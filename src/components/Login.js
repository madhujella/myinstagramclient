import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './Layout';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Login = (props) => {

    return (
        <div className="authWrapper">
            <h2 className="text-center">myInstagram</h2>
            <Row>
                <Col sm={6} className={"offset-sm-3"} >
                    <Form className="justify-content-center">
                        <Form.Text>{props.error}</Form.Text>
                        <Form.Group controlId="loginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Button className="text-center" variant="primary" type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
            <Link to="/signup">Sign Up</Link>
        </div>

    )
}

export default Login;
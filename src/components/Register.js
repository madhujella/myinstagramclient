import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './Layout';

const Register = (props) => {
    return (
        <Layout>
            <Form onSubmit={(e) => { console.log(e, 'register') }}>
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

                <Button variant="primary" type="submit">Sign Up</Button>
            </Form>
        </Layout>
    )
}

export default Register;
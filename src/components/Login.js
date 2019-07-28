import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './Layout';


const Login = (props) => {
    return (
        <Layout>
            <Form>
                <Form.Text>{props.error}</Form.Text>
                <Form.Group controlId="loginUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </Layout>
    )
}

export default Login;
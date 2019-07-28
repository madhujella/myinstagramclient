import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './Layout';

const ProfileSettings = (props) => {
    return (
        <Layout>
            <Form>
                <Form.Text>{props.error}</Form.Text>
                <Form.Group controlId="settingsEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="settingsPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Change Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Change Details</Button>
            </Form>
        </Layout>

    )
}

export default ProfileSettings;
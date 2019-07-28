import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

const ProfileSettings = (props) => {

    return (
        <Layout>
            <Row>
                <Col sm={6} className={"offset-sm-3"}>
                    <Form>
                        <Form.Text>{props.error}</Form.Text>
                        <Form.Group controlId="settingsEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Change email" />
                        </Form.Group>

                        <Form.Group controlId="settingsPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Change Password" />
                        </Form.Group>
                        <Button className="text-center" variant="primary" type="submit">Change Details</Button>
                    </Form>
                </Col>
            </Row>
        </Layout>

    )
}

export default ProfileSettings;
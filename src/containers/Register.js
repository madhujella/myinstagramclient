import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from "../store/creators";

const Register = (props) => {

    const [fEmail, setfEmail] = useState('');
    const [fUsername, setfUsername] = useState('');
    const [fPassword, setfPassword] = useState('');
    const [fCPassword, setfCPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (props.error) {
            if (typeof props.error.errors !== undefined) {
                console.log(props.error.errors)
                let derr = ''
                for (let err in props.error.errors) {
                    derr += props.error.errors[err].msg
                }
                setErrorMsg(derr)
            }
            if(typeof props.error.error !== 'undefined'){
                setErrorMsg(props.error.message)
            }
        }
    }, [props.error])

    const submitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (fEmail.length <= 3) {
            setErrorMsg('Invalid Email');
            return;
        } else if (fUsername.length <= 3) {
            setErrorMsg('Username must be greater than 3 chars')
            return;
        } else if (fPassword.length <= 3) {
            setErrorMsg('Password must be greater than 3 chars')
            return;
        } else if (fCPassword.length <= 3) {
            setErrorMsg('Password not match')
            return;
        } else if (fPassword !== fCPassword) {
            setErrorMsg('Password not match')
            return;
        }
        props.register(fEmail, fUsername, fPassword)
    }

    return (
        <div className="authWrapper">
            <h2 className="text-center">myInstagram</h2>
            <Row>
                <Col sm={6} className={"offset-sm-3"} >
                    <Form onSubmit={submitHandler}>
                        <Form.Text>{errorMsg}</Form.Text>

                        <Form.Group controlId="registerEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => { setfEmail(e.target.value) }} value={fEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="registerUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(e) => { setfUsername(e.target.value) }} value={fUsername} type="text" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="registerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => { setfPassword(e.target.value) }} value={fPassword} type="password" placeholder="Enter Password" />
                        </Form.Group>

                        <Form.Group controlId="registercPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={(e) => { setfCPassword(e.target.value) }} value={fCPassword} type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button className="text-center" variant="primary" type="submit">Sign Up</Button>
                    </Form>
                </Col>
            </Row>
            <p className="text-center"><Link to="/login">Login</Link></p>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, user, pass) => dispatch(register(email, user, pass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
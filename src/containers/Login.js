import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { login } from "../store/creators";
import { connect } from 'react-redux';

const Login = (props) => {
    const [fUsername, setfUsername] = useState('');
    const [fPassword, setfPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    
    useEffect(()=> {
        if(props.error) {
            setErrorMsg(props.error.message);
        }
    }, [props.error])

    const submitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (fUsername.length > 3 && fPassword.length > 3) {
            setErrorMsg('')
            props.login(fUsername, fPassword)
        } else {
            setErrorMsg('Please check fields')
        }
    }

    return (
        <div className="authWrapper">
            <h2 className="text-center">myInstagram</h2>
            <Row>
                <Col sm={6} className={"offset-sm-3"} >
                    <Form onSubmit={submitHandler} className="justify-content-center">
                        <Form.Text>{errorMsg}</Form.Text>
                        <Form.Group controlId="loginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(e) => { setfUsername(e.target.value) }} value={fUsername} type="text" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => { setfPassword(e.target.value) }} value={fPassword} type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Button className="text-center" variant="primary" type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
            <p className="text-center"><Link to="/signup">Sign Up</Link></p>
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
        login: (user, pass) => dispatch(login(user, pass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
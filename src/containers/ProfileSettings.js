import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from "../components/Layout";
import { editProfile } from "../store/creators";
import {connect} from 'react-redux';

const ProfileSettings = (props) => {

    console.log('settings')
    const [fPassword, setfPassword] = useState('');
    const [fCPassword, setfCPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    console.log(props)

    const submitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (fPassword.length > 3 && fCPassword) {
            if(fPassword !== fCPassword) {
                setErrorMsg('Password Not Match')
                return;
            }
            setErrorMsg('')
            const {token, userid} = props.loggedProfile;
            props.editProfile(token, fPassword, userid)
        } else {
            setErrorMsg('Please check fields')
        }
    }

    useEffect(()=>{
        if(props.message){
            setErrorMsg('Password Changed')
        }
    },[props.message])

    return (
        <Layout>
            <Row>
                <Col sm={6} className={"offset-sm-3"}>
                    <Form onSubmit={submitHandler}>
                        <Form.Text>{errorMsg}</Form.Text>
                        <Form.Group controlId="settingsEmail">
                            <Form.Label>Change Password</Form.Label>
                            <Form.Control onChange={(e) => {setfPassword(e.target.value)}} value={fPassword} type="password" placeholder="Change Password" />
                        </Form.Group>

                        <Form.Group controlId="settingsPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={(e) => {setfCPassword(e.target.value)}} value={fCPassword} type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button className="text-center" variant="primary" type="submit">Change Details</Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.isProfileEditSuccess,
        loggedProfile: state.loggedProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProfile: (token, pass, userid) => dispatch(editProfile(token, pass, userid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
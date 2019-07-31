import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from "../store/creators";
import { connect } from 'react-redux';

const Logout = (props) => {

    console.log('logout components')
    useEffect(() => {
        props.logout()
    },[])
    return (
        <Redirect to='/' />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
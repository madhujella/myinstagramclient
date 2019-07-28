import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';


const LandingPage = (props) => {
    return (
        <Layout>
            <h2>Click To --->></h2>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
        </Layout>
    )
}

export default LandingPage;
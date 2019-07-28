import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';


const LandingPage = (props) => {
    return (
        <div className="mainBg" style={{ height: window.innerHeight + 'px' }}>
            <div className="lpContent">
                <h2 className="text-center">myInstagram</h2>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default LandingPage;
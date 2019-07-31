import React from 'react';
import Button from 'react-bootstrap/Button';

const LandingPage = (props) => {
    return (
        <div className="mainBg" style={{ height: window.innerHeight + 'px' }}>
            <div className="lpContent">
                <h2 className="text-center">myInstagram</h2>
                <Button style={{margin: '10px'}} href="/signup">Sign Up</Button>
                <Button href="/login">Login</Button>
            </div>
        </div>
    )
}

export default LandingPage;
import React from 'react';
import NavigationBar from './Navigationbar';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <div>
            <NavigationBar />
            <Container className="marginTop">
                    {props.children}
            </Container>
        </div>
    )
}

export default Layout;
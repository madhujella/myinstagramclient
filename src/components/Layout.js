import React from 'react';
import NavigationBar from './Navigationbar';

const Layout = (props) => {
    return (
        <div>
            <NavigationBar />
            {props.children}
        </div>
    )
}

export default Layout;
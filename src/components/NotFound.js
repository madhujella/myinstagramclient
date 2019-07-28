import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p> <Link to="/">go Back</Link></p>
        </div>
    )
}

export default NotFound;
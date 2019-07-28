import React from 'react';
import PhotoView from './PhotoView';


const PostView = (props) => {
    return (
        <div>
            <PhotoView />
            <h2>username</h2>
            <p>caption</p>
            <button>Favorite</button>
        </div>
    )
}

export default PostView;
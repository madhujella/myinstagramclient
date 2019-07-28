import React from 'react';
import PhotoView from './PhotoView';

const PostsList = (props) => {

    return (
        <PhotoView url={e.url} caption={e.caption} key={e.photoid} id={e.photoid} />        
    )
}

export default PostsList;
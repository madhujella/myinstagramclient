import React from 'react';
import * as API from '../API';
import Figure from 'react-bootstrap/Figure';

const PhotoView = (props) => {
    const url = `${API.imageServer}/${props.post.url}`
    return (
        <Figure>
            <Figure.Image
                width={290}
                height={290}
                alt="171x180"
                src={url}
            />
        </Figure>
    )
}

export default PhotoView;
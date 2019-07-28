import React from 'react';
import Figure from 'react-bootstrap/Figure';

const PhotoView = (props) => {
    return (
        <Figure>
            <Figure.Image
                width={290}
                height={290}
                alt="171x180"
                src={require('../logo.svg')}
            />
            <Figure.Caption>{props.caption}</Figure.Caption>
        </Figure>
    )
}

export default PhotoView;
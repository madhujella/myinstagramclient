import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Figure from 'react-bootstrap/Figure';
import PhotoView from './PhotoView';

const ProfilePosts = (props) => {

    // const userPosts = props.userPosts.map((e) => {
    //     return (
    //         <PhotoView url={e.url} caption={e.caption} key={e.photoid} id={e.photoid} />
    //     )
    // })

    return (
        <Tabs defaultActiveKey="posts" id="profilePostTabs">
            <Tab eventKey="posts" title="POSTS">
                {/* {userPosts} */}
            </Tab>
            <Tab eventKey="favorites" title="FAVORITES">
                {/* {favPosts} */}
            </Tab>
        </Tabs>
    )
}

export default ProfilePosts;
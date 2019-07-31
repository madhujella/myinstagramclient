import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as API from '../API';
import { Link } from 'react-router-dom';

const ProfilePosts = (props) => {
    let posts = null;
    let favs = null
    if (props.user) {

        posts = props.user.data.map((e) => {
            return (
                <Col key={e.photoid} sm={4}>
                    <div key={e.photoid} id={e.userid} className="post" >
                        <Link to={`/post/${e.photoid}`}><img alt={e.url} src={`${API.imageServer}/${e.url}`} width={'100%'} height={'100%'} /></Link>
                    </div>
                </Col>
            )
        })
    } else if (props.myPosts) {
        posts = props.myPosts.users.map((e) => {
            return (
                <Col key={e.photoid} sm={4}>
                    <div key={e.photoid} id={e.userid} className="post" >
                        <Link to={`/post/${e.photoid}`}><img  alt={e.url} src={`${API.imageServer}/${e.url}`} width={'100%'} height={'100%'} /></Link>
                    </div>
                </Col>
            )
        })
        favs = props.myPosts.favs.map((e) => {
            return (
                <Col key={e.photoid} sm={4}>
                    <div key={e.photoid} id={e.userid} className="post" >
                        <Link to={`/post/${e.photoid}`}><img  alt={e.url} src={`${API.imageServer}/${e.url}`} width={'100%'} height={'100%'} /></Link>
                    </div>
                </Col>
            )
        })
    }

    let hasfavs = null;
    console.log(props)
    if (props.isLoggedIn && favs) {
        hasfavs = (
            <Tab eventKey="favorites" title="FAVORITES">
                <Row>
                    {(favs.length > 0) ? favs : favs = <p className='noPosts'>No Favs</p>}
                </Row>
            </Tab>
        )
    }

    return (
        <Tabs defaultActiveKey="posts" id="profilePostTabs">
            <Tab eventKey="posts" title="POSTS">
                <Row>
                    {(posts.length > 0) ? posts : posts = <p className='noPosts'>No Posts</p>}

                </Row>
            </Tab>
            {hasfavs}
        </Tabs>
    )
}

export default ProfilePosts;
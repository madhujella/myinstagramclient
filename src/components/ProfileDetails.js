import React from 'react';
import * as API from '../API';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProfileDetails = (props) => {
    console.log(props)
    let profileAvatar = null;
    let username = null;
    let count = null;
    let cp = null;
    if (props.user) {
        profileAvatar = props.user.user[0].profile_avatar;
        username = props.user.user[0].username
        count = props.user.data.length;
    } else {
        profileAvatar = props.loggedProfile.profile_avatar;
        username = props.loggedProfile.username
        count = props.myPosts.users.length;
        cp = <p><Button variant="info" href="/settings" >Change Password</Button></p>
    }

    const url = `${API.imageServer}/${profileAvatar}`
    return (
        <Row>
            <Col sm={3} className="offset-sm-2">
                <div className="profileImgContainer">
                    <img src={url} width={150} height={150} alt='profileImg' />
                </div>
            </Col>
            <Col sm={4}>
                <div className="profileDetailsContainer">
                    <h2 className="profileUsername">{username}</h2>
                    <p className="profilePostsCount">Posts Count: {count}</p>
                    {cp}
                </div>
            </Col>
        </Row>
    )
}

export default ProfileDetails;
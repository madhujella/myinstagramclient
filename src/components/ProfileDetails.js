import React from 'react';

const ProfileDetails = (props) => {
    return (
        <div className="profileDetailsContainer">
            <h2 className="profileUsername">{"props.username"}</h2>
            <p className="profilePostsCount">{"props.postsCount"}</p>
            <p className="profileDescription">{"props.description"}</p>
        </div>
    )
}

export default ProfileDetails;
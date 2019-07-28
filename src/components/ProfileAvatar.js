import React from 'react';

const ProfileAvatar = (props) => {
    return (
        <div className="profileImgContainer">
            <img src={require('../logo.svg')} width={50} height={50} alt='profileImg' />
        </div>
    )
}

export default ProfileAvatar;
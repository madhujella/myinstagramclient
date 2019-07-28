import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileDetails from './ProfileDetails';
import Navbar from './Navigationbar';
import ProfilePosts from './ProfilePosts';
import Layout from './Layout';

const Profile = (props) => {

    return (
        <Layout>
            <ProfileAvatar />
            <ProfileDetails />
            <ProfilePosts />
        </Layout>
    )
}

export default Profile;
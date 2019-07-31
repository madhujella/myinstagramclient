import React, { useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { Redirect } from 'react-router-dom';
import { getUser, getLoggedUserPosts, getUserInit } from "../store/creators";
import { connect } from 'react-redux';
import ProfileDetails from '../components/ProfileDetails';
import ProfilePosts from '../components/ProfilePosts';
import Layout from '../components/Layout';


const Profile = (props) => {
    const { match } = useReactRouter();
    console.log(match)

    const userid = match.params.userid

    useEffect(() => {
        if (match.path.startsWith('/user')) {
            props.getUser(userid)
        } else if (match.path.startsWith('/mainpage')) {
            const { token, userid } = props.loggedProfile
            props.getLoggedUserPosts(userid, token)
        }
    }, [props.loggedProfile])

    useEffect(() => {
        return () =>{
            props.getUserInit()
        }
    }, [])

    let r = null;

    console.log(props)
    if ((props.user && props.user.message) || (props.myPosts && props.myPosts.message)) {
        r = <p>User Not Found</p>
    }
    else if (props.loggedProfile && userid === props.loggedProfile.userid) {
        r = <Redirect to="/mainpage" />
    }  else if (props.user || props.myPosts) {
        r = (
            <Layout>
                <ProfileDetails {...props} />
                <ProfilePosts {...props} />
            </Layout>
        )
    } else {
        r = <p>loading...</p>
    }
    if (props.error) {
        r = <p>Server Error</p>
    }


    return (
        <div>
            {r}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        isLoggedIn: state.isLoggedIn,
        loggedProfile: state.loggedProfile,
        user: state.user,
        myPosts: state.myPosts,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userid) => dispatch(getUser(userid)),
        getUserInit: () => dispatch(getUserInit()),
        getLoggedUserPosts: (userid, token) => dispatch(getLoggedUserPosts(userid, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
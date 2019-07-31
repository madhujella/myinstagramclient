import React, { useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoView from '../components/PhotoView';
import { getPost, addFav, removeFav, getPostInit } from "../store/creators";
import Layout from '../components/Layout';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as API from '../API';

const PostView = (props) => {

    const { match } = useReactRouter();
    const [isFaved, setIsFaved] = useState(false);
    console.log('postview', props)
    

    useEffect(() => {
        const id = match.params.photoid
        if (props.isLoggedIn) {
            const userid = props.loggedProfile.userid
            const token = props.loggedProfile.token
            props.getPost(id, userid, token)
        } else {
            props.getPost(id, null, null)
        }
    }, [props.loggedProfile])

    useEffect(() => {
        return () => {
            props.getPostInit()
        }
    }, [])

    useEffect(()=> {
        if (props.post){
            setIsFaved(props.post.isFaved)
        }
    })


    const favPost = (e) => {
        const { token, userid } = props.loggedProfile;
        const { photoid } = props.post.data;

        if (isFaved) {
            props.removeFav(token, userid, !isFaved, photoid)
        } else {
            props.addFav(token, userid, !isFaved, photoid)
        }
    }

    let enableFav = <p>login to favorite</p>
    if (props.isLoggedIn) {
        enableFav = <Button variant={(isFaved) ? "danger" : "light"} onClick={favPost} >{(isFaved) ? 'unfavorite' : 'favorite'}</Button>
    }

    let hasPost = <p>loading...</p>;

    if (props.post && Object.keys(props.post).indexOf('data') !== -1) {
        const route = (props.loggedProfile && props.post.data.userid === props.loggedProfile.userid) ? '/mainpage' : `/user/${props.post.data.userid}`
        hasPost = (
            <Row className='postContainer'>
                <Col sm={6}>
                    <PhotoView post={{ ...props.post.data }} />
                </Col>
                <Col style={{ borderLeft: '1px solid #ccc', padding: '10px' }} sm={6}>
                    <Link to={route}>
                        <img src={`${API.imageServer}/${props.post.data.profile_avatar}`} width={30} height={30} />
                        <span style={{ marginLeft: '5px' }}>{props.post.data.username}</span>
                    </Link>
                    <p style={{ margin: '10px 0' }}>{props.post.data.caption}</p>
                    <p>{props.post.favsCount} favorites</p>
                    {enableFav}
                </Col>
            </Row>
        )
    } else if (props.post && props.post.message) {
        hasPost = <p>{props.post.message}</p>
    }
    if (props.error) {
        hasPost = <p>Server Error</p>
    }

    return (
        <Layout>
            {hasPost}
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        post: state.post,
        isLoggedIn: state.isLoggedIn,
        loggedProfile: state.loggedProfile,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id, userid, token) => dispatch(getPost(id, userid, token)),
        getPostInit: () => dispatch(getPostInit()),
        addFav: (token, userid, shouldFav, photoid) => dispatch(addFav(token, userid, shouldFav, photoid)),
        removeFav: (token, userid, shouldFav, photoid) => dispatch(removeFav(token, userid, shouldFav, photoid))
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)((PostView)));
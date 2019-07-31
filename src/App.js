import React, { useEffect } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Profile from './containers/Profile';
import ProfileSettings from './containers/ProfileSettings';
import Register from './containers/Register';
import Login from './containers/Login';
import LandingPage from './components/LandingPage';
import PostView from './containers/PostView';
import { authCheck } from "./store/creators";
import { connect } from 'react-redux';
import Logout from './containers/Logout';
import NotFound from './components/NotFound';


const App = (props) => {
  console.log(props)

  useEffect(() => {
    props.checkIsAuth();
  }, [])

  let routes = (
    <Switch>
      <Route path="/user/:userid" component={Profile} />
      <Route path="/post/:photoid" component={PostView} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="/" component={LandingPage} exact />
      <Route component={NotFound} />
    </Switch>
  )

  if (props.isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/user/:userid" component={Profile} />
        <Route path="/post/:photoid" component={PostView} />
        <Route path="/logout" component={Logout} />
        <Route path="/settings" component={ProfileSettings} />
        <Route path="/mainpage" component={Profile} />
        <Redirect to="/mainpage" />
      </Switch>
    )
  }


  return (
    <div>
      {routes}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkIsAuth: () => dispatch(authCheck())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

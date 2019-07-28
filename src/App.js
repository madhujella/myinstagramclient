import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import PostView from './components/PostView';
import NotFound from './components/NotFound';

function App() {
  const isLoggedIn = false;

  let routes = null;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/settings" component={ProfileSettings} />
        <Route path="/mainpage" component={Profile} />
        <Route path="/user/:userid" component={Profile} />
        <Route path="/post/:photoid" component={PostView} />
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
        <Route component={NotFound} />
      </Switch>
    )
  }else {
    routes = (
      <Switch>
        <Route path="/user/:userid" component={Profile} />
        <Route path="/post/:photoid" component={PostView} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
        <Route component={NotFound} />
      </Switch>
    )
  }

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;

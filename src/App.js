import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/settings" component={ProfileSettings} />
        <Route path="/mainpage" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;

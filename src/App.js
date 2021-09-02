import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { landing, login, profileSelection, profileUpdate, main } from './routes/routes';
import Landing from './pages/landing';
import Login from './pages/login';
import ProfileSelection from './pages/profile/profileSelection';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={main}>
            <Redirect to={landing} />
          </Route>
          <Route exact path={landing}>
            <Landing />
          </Route>
          <Route exact path={login}>
            <Login />
          </Route>
          <Route exact path={profileSelection}>
            <ProfileSelection />
          </Route>
          <Route exact path={profileUpdate}>
            <ProfileSelection />
          </Route>
          <Route path='*'>
            <h1>404</h1>
            <h1>NOT FOUND</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

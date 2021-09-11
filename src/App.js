import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  landing,
  login,
  profileSelection,
  profileUpdate,
  main,
  catalog,
  movie,
} from './routes/routes';
import Landing from './pages/landing';
import Login from './pages/login';
import ProfileSelection from './pages/profile/profileSelection';
import ProfileUpdate from './pages/profile/profileUpdate';
import PrivateRoute from './components/routes/privateRoute';
import Catalog from './pages/catalog';
import { UserProvider } from './context/userContext';
import { CatalogProvider } from './context/catalogContext';
import Movie from './pages/movie';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <CatalogProvider>
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
              <PrivateRoute exact path={profileSelection}>
                <ProfileSelection />
              </PrivateRoute>
              <PrivateRoute exact path={profileUpdate}>
                <ProfileUpdate />
              </PrivateRoute>
              <PrivateRoute exact path={catalog}>
                <Catalog />
              </PrivateRoute>
              <PrivateRoute exact path={movie()}>
                <Movie />
              </PrivateRoute>
              <Route path='*'>
                <h1>404</h1>
                <h1>NOT FOUND</h1>
              </Route>
            </Switch>
          </Router>
        </CatalogProvider>
      </UserProvider>
    </div>
  );
}

export default App;

import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as api from './services/api';

const HomeComponent = lazy(() => import('./pages/home'));
const LoginComponent = lazy(() => import('./pages/login'));

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = api.getTokenLocalStorage();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (isAuthenticated !== '' && isAuthenticated !== null && isAuthenticated !== undefined) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const LoginApp = () => {
  return(
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <PrivateRoute path="/home">
            <HomeComponent />
          </PrivateRoute>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <PrivateRoute extract path="/">
            <HomeComponent/>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  )
} 
export default LoginApp;